import React, { type FC, useState } from 'react'

import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'

import styles from './index.module.scss'
import { useGetGroupNewsVideosQuery } from 'src/store/groups/groups.api'
import { useParams } from 'react-router-dom'

export const GroupNewsVideos: FC = () => {
	const { id } = useParams()

	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const { data: newsVideosList } = useGetGroupNewsVideosQuery(id ?? '')

	return (
		<div>
			<div className={styles.videosTitleBlock}>
				<h2>Видеозаписи группы</h2>
				<MainSelect
					onChange={(e) => setYearsSelectValue(e.target.value)}
					value={yearsSelectValue}
					className={styles.newsDateSelect}
					items={[{ label: 'Все годы', value: '' }]}
				/>
				<MainSelect
					onChange={(e) => setYearsSelectValue(e.target.value)}
					value={yearsSelectValue}
					className={styles.newsDateSelect}
					items={[{ label: 'Все месяцы', value: '' }]}
				/>
			</div>
			<VideoGallery videos={newsVideosList} />
		</div>
	)
}
