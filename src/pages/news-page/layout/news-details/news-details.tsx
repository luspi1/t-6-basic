import { PageContent } from 'src/components/page-content/page-content'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'

import { useGetAllNewsQuery, useGetNewsByIdQuery } from 'src/store/news/news.api'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { customFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
import { AsideNews } from 'src/components/aside-news/aside-news'
export const NewsDetails = () => {
	const { id } = useParams()
	const { data: newsList } = useGetAllNewsQuery({})
	const { data: newsItemData, isLoading } = useGetNewsByIdQuery(id ?? '')
	useAdditionalCrumbs(newsItemData?.title)

	if (isLoading) return <Loader />
	if (!newsItemData) return null
	return (
		<div className={styles.newsItemPage}>
			<PageContent className={styles.newsItemPageContent} $padding='30px 70px 35px 30px'>
				<Helmet>
					<title>Одна новость</title>
				</Helmet>

				<h2>{newsItemData?.title}</h2>
				<span className={styles.newsItemDate}>
					{customFormatDate(newsItemData?.date, { day: 'numeric', month: 'long', year: 'numeric' })}
				</span>
				<div className={styles.newsItemMainImg}>
					<img src={newsItemData?.preview} alt={newsItemData?.title} />
				</div>
				{newsItemData?.textNews?.map((textEl, idx) => (
					<p className={styles.newsText} key={idx}>
						{textEl}
					</p>
				))}
				<ul className={styles.newsGallery}>
					{newsItemData?.imgGallery?.map((imgEl, idx) => (
						<li className={styles.galleryImg} key={idx}>
							<img src={imgEl} alt='gallery image' />
						</li>
					))}
				</ul>
				<div className={styles.allNewsBlock}>
					<Link to={`/${AppRoute.News}`}>Все новости</Link>
				</div>
			</PageContent>
			<AsideNews currentNewsId={id ?? ''} newsList={newsList} />
		</div>
	)
}
