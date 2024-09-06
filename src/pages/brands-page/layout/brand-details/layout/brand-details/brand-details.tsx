import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { LinksList } from 'src/components/links-list/links-list'

import { formatSourceLinks } from 'src/helpers/utils'

import { useGetBrandEventByIdQuery } from 'src/store/brandEvents/brand-events.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

export const BrandDetails: FC = () => {
	const { id } = useParams()

	const { data: brandEventInfo } = useGetBrandEventByIdQuery(id ?? '')
	return (
		<div>
			<RenderedArray strArray={brandEventInfo?.descs} as='div' asStr='p' separator='' />
			<LinksList dataList={formatSourceLinks(brandEventInfo?.relatedLinks)} title='Массив ссылок' />
		</div>
	)
}
