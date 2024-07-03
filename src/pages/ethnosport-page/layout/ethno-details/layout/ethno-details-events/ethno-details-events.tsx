import { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'

export const EthnoDetailsEvents: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	const { events: directionEvents } = ethnoDetails

	return (
		<section>
			<ul className={styles.eventsList}>
				{directionEvents?.map((eventEl) => (
					<li key={eventEl.id}>
						<div className={styles.eventElInfo}>
							<p>
								<span>{eventEl.dates[0]} -</span> <span>{eventEl.dates[1]}</span>
							</p>
							<span>{eventEl.location}</span>
							<Link to={`/events/${eventEl.id}`}>Регистрация</Link>
						</div>
						<div className={styles.eventElContent}>
							<h5>{eventEl.title}</h5>
							<div className={styles.eventElOrganizers}>
								{eventEl?.organizerLinks?.map((orgLink, idx) => (
									<a key={idx} href={orgLink.link}>
										{orgLink.title}
									</a>
								))}
							</div>
							<p className={styles.eventElDesc}>Особенности события: {eventEl.desc}</p>
							<div className={styles.eventElBottom}>
								<ul>{eventEl?.tags?.map((orgTag, idx) => <li key={idx}>{orgTag}</li>)}</ul>
							</div>
						</div>
						<div className={styles.eventElImg}>
							<img src={eventEl.preview} alt={eventEl.title} />
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
