import { type FC } from 'react'
import { type LinkItem, type SourceLink } from 'src/types/global'

import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'

export type DepartmentLinksProps = {
	relatedLinks?: SourceLink[]
}

export const DepartmentLinks: FC<DepartmentLinksProps> = ({ relatedLinks }) => {
	const formatRegionLinks = (data: SourceLink[] | undefined): LinkItem[] | undefined => {
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
			<LinksList dataList={formatRegionLinks(relatedLinks)} title='Ссылки' />
		</div>
	)
}
