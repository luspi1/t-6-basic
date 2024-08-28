import React, { type FC } from 'react'
import { useGetNewsVideoByIdQuery } from 'src/store/news/news.api'
import { useParams } from 'react-router-dom'
import { PageContent } from 'src/components/page-content/page-content'
import { Helmet } from 'react-helmet-async'

export const GroupNewsVideoDetails: FC = () => {
	const { id } = useParams()
	const { data: videoDetails } = useGetNewsVideoByIdQuery(id ?? '')
	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Видео</title>
			</Helmet>
			<h2>{videoDetails?.title}</h2>
			<iframe
				src={videoDetails?.url}
				allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
				allowFullScreen
			></iframe>
		</PageContent>
	)
}
