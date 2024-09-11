import { type FC } from 'react'
import { type ShortDocument } from 'src/types/document'
import { type SimpleLinkType, type SourceLink } from 'src/types/global'
import cn from 'classnames'

import { SimpleLink } from 'src/components/simple-link/simple-link'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'
import { formatSourceLinks } from 'src/helpers/utils'
import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'

type DetailedAsideProps = {
	className?: string
	brandImg?: string
	genPartnerImg?: string
	partners?: SimpleLinkType[]
	organizers?: SimpleLinkType[]
	documents?: ShortDocument[]
	links?: SourceLink[]
}

export const DetailedAside: FC<DetailedAsideProps> = ({
	className,
	brandImg,
	genPartnerImg,
	partners,
	organizers,
	documents,
	links,
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
			<AsideDocuments documents={documents} />
			<LinksList
				className={styles.detailedAsideLinks}
				dataList={formatSourceLinks(links)}
				title='Ссылки'
			/>
		</aside>
	)
}
