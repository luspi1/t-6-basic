import { type FC } from 'react'
import { type LinkItem, type SourceLink } from 'src/types/global'

import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { LinksList } from 'src/components/links-list/links-list'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'

export const UserDetails: FC = () => {
	const { id } = useParams()

	const { data: userInfo } = useGetUserByIdQuery(id ?? '')
	const formatUserLinks = (data: SourceLink[] | undefined): LinkItem[] | undefined => {
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
				<InfoRow
					title='Статусы участника:'
					margin='0 0 20px 0'
					label={<RenderedArray strArray={userInfo?.statuses} />}
				/>
				<InfoRow
					title='Официальные регалии:'
					label={<RenderedArray strArray={userInfo?.regalia} />}
				/>
			</section>
			<section>
				<InfoRow title='Подробнее о себе' margin='0 0 10px 0' label={userInfo?.mainDesc} />
			</section>
			<section>
				<LinksList dataList={formatUserLinks(userInfo?.relatedLinks)} title='Массив ссылок' />
			</section>
		</div>
	)
}
