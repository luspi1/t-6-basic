import { type FC, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { useGetNewsVideosQuery } from 'src/store/news/news.api'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'
import { NewsNavigation } from 'src/components/news-navigation/news-navigation'

import styles from './index.module.scss'

export const GroupNewsVideos: FC = () => {
	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const { data: newsVideosList } = useGetNewsVideosQuery(null)

	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Видеолента</title>
			</Helmet>
			<div className={styles.videosTitleBlock}>
				<h2>Все новости</h2>
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
				<NewsNavigation activeLink='videos' />
			</div>
			<VideoGallery videos={newsVideosList} />
		</PageContent>
	)
}
