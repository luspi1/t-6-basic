import { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'

export const EthnoDetailsDisciplines: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	const { disciplines: directionDisciplines } = ethnoDetails
	return (
		<section>
			<ul className={styles.disciplinesList}>
				{directionDisciplines?.map((disciplineEl) => (
					<li key={disciplineEl.id}>
						<div className={styles.disciplineElContent}>
							<h5>{disciplineEl.title}</h5>
							<div className={styles.disciplineElCategories}>
								{disciplineEl?.categories?.map((category, idx) => (
									<span key={idx}>{category}</span>
								))}
							</div>
							<p className={styles.disciplineElDesc}>{disciplineEl.mainDesc}</p>
							<div className={styles.disciplineElBottom}>
								<Link to={`/disciplines/${disciplineEl.id}`}>Перейти на страницу дисциплины</Link>
								<ul>
									<li>Отделений: 7</li>
									<li>Участников: 20</li>
									<li>Событий: 19</li>
								</ul>
							</div>
						</div>
						<div className={styles.disciplineElImg}>
							<img src={disciplineEl.imgUrl} alt={disciplineEl.title} />
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
