import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { Loader } from 'src/components/loader/loader'
import { AppRoute } from 'src/routes/main-routes/consts'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'
export const EventDetails = () => {
	const { id } = useParams()
	const { data: eventData, isLoading } = useGetEventByIdQuery(id ?? '')
	useAdditionalCrumbs(eventData?.title)

	if (isLoading) return <Loader />
	if (!eventData) return null
	return (
		<PageContent
			className={styles.eventItemPageContent}
			$maxWidth='100%'
			$padding='30px 70px 35px 30px'
		>
			<Helmet>
				<title>Событие</title>
			</Helmet>

			<h2>{eventData?.title}</h2>
			<span className={styles.eventItemDate}>
				{eventData?.dates[0]} - {eventData?.dates[1]}
			</span>
			<div className={styles.eventItemMainImg}>
				<img src={eventData?.preview} alt={eventData?.title} />
			</div>

			<div className={styles.allEventsBlock}>
				<Link to={`/${AppRoute.Events}`}>Все события</Link>
			</div>
		</PageContent>
	)
}
