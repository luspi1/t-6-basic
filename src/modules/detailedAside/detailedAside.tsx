import { type FC } from 'react'
import cn from 'classnames'

import styles from './index.module.scss'
import { type SimpleLinkType } from 'src/types/global'
import { SimpleLink } from 'src/components/simple-link/simple-link'

type DetailedAsideProps = {
	className?: string
	brandImg?: string
	genPartnerImg?: string
	partners?: SimpleLinkType[]
	organizers?: SimpleLinkType[]
}

export const DetailedAside: FC<DetailedAsideProps> = ({
	className,
	brandImg,
	genPartnerImg,
	partners,
	organizers,
}) => {
	return (
		<aside className={cn(styles.detailedAside, className)}>
			{brandImg && (
				<div className={styles.asideEl}>
					<h6>Бренд событий</h6>
					<div className={styles.asideImg}>
						<img src={brandImg} alt='Бренд' />
					</div>
				</div>
			)}
			{genPartnerImg && (
				<div className={styles.asideEl}>
					<h6>Генеральный партнер</h6>
					<div className={styles.asideImg}>
						<img src={genPartnerImg} alt='Генеральный партнер' />
					</div>
				</div>
			)}
			{partners?.length && (
				<div className={styles.asideEl}>
					<h6>Партнеры</h6>
					<ul className={styles.asideSimpleLinks}>
						{partners.map((partnerEl) => (
							<SimpleLink title={partnerEl.title} link={partnerEl.link} key={partnerEl.title} />
						))}
					</ul>
				</div>
			)}
			{organizers?.length && (
				<div className={styles.asideEl}>
					<h6>Организаторы программы</h6>
					<ul className={styles.asideSimpleLinks}>
						{organizers.map((organizersEl) => (
							<SimpleLink
								title={organizersEl.title}
								link={organizersEl.link}
								key={organizersEl.title}
							/>
						))}
					</ul>
				</div>
			)}
		</aside>
	)
}
