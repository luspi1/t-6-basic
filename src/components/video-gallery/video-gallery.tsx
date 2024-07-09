import React, { type FC } from 'react'
import { type VideoItem } from 'src/types/videos'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { customFormatDate } from 'src/helpers/utils'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

type VideoGalleryProps = {
	title?: string
	videos?: VideoItem[]
	className?: string
	$videoWidth?: string
	$videoHeight?: string
} & React.CSSProperties

const StyledVideo = styled.div<VideoGalleryProps>`
	width: ${({ $videoWidth }) => $videoWidth ?? '204px'};
	height: ${({ $videoHeight }) => $videoHeight ?? '115px'};
	border-radius: 8px;
	position: relative;
	img {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		border-radius: 8px;
		width: 100%;
		height: 100%;
		z-index: 50;
	}
	iframe {
		width: 100%;
		height: 100%;
		border-radius: 7px;
		border: none;
	}
`

export const VideoGallery: FC<VideoGalleryProps> = ({
	title,
	videos = [],
	className,
	$videoHeight,
	$videoWidth,
}) => {
	if (videos?.length < 1) return null
	return (
		<div className={className}>
			{title && <h4>{title}</h4>}
			<ul className={styles.videoGallery}>
				{videos?.map((item) => (
					<li key={item.id}>
						<StyledVideo $videoWidth={$videoWidth} $videoHeight={$videoHeight}>
							<iframe
								src={item.url}
								allow='encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
								allowFullScreen
							></iframe>
							{item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
						</StyledVideo>
						<Link to={`/${AppRoute.News}/${AppRoute.NewsVideo}/${item.id}`}>{item.title}</Link>
						<p>
							{customFormatDate(item?.date, { day: 'numeric', month: 'long', year: 'numeric' })}
						</p>
					</li>
				))}
			</ul>
		</div>
	)
}
