import { type FC } from 'react'
import { type LinkItem } from 'src/types/global'
import { type RegionLink } from 'src/types/regions'

import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'

export type DepartmentLinksProps = {
	relatedLinks?: RegionLink[]
}

export const DepartmentLinks: FC<DepartmentLinksProps> = ({ relatedLinks }) => {
	const formatRegionLinks = (data: RegionLink[] | undefined): LinkItem[] | undefined => {
		if (!data) return undefined
		return data.map((regItem) => ({
			id: regItem.id,
			link: regItem.link,
			titleLink: regItem.title,
			label: [regItem.date, regItem.source],
		}))
	}
	return (
		<div className={styles.container}>
			<LinksList dataList={formatRegionLinks(relatedLinks)} title='Массив ссылок' />
		</div>
	)
}
