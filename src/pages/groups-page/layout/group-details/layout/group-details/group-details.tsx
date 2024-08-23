import { type FC } from 'react'
import { type LinkItem, type SourceLink } from 'src/types/global'

import { useParams } from 'react-router-dom'

import { LinksList } from 'src/components/links-list/links-list'

import { useGetGroupByIdQuery } from 'src/store/groups/groups.api'
import { formatDocumentLinks } from 'src/helpers/utils'
import styles from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-info/index.module.scss'

export const GroupDetails: FC = () => {
	const { id } = useParams()

	const { data: groupInfo } = useGetGroupByIdQuery(id ?? '')
	const formatGroupLinks = (data: SourceLink[] | undefined): LinkItem[] | undefined => {
		if (!data) return undefined
		return data.map((regItem) => ({
			id: regItem.id,
			link: regItem.link,
			titleLink: regItem.title,
			label: [regItem.date, regItem.source],
		}))
	}

	return (
		<div>
			<section>
				<p>{groupInfo?.mainDesc}</p>
			</section>
			<section>
				<LinksList
					className={styles.groupInfoDocs}
					dataList={formatDocumentLinks(groupInfo?.documents)}
					title='Документы группы'
				/>
			</section>
			<section>
				<LinksList dataList={formatGroupLinks(groupInfo?.relatedLinks)} title='Массив ссылок' />
			</section>
		</div>
	)
}
