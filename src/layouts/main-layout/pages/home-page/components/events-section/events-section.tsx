import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { AppRoute } from 'src/routes/main-routes/consts'
import { Container } from 'src/UI/Container/Container'
import { EventsList } from 'src/layouts/main-layout/pages/home-page/components/events-section/components/events-list/events-list'
import { EventsItems } from './consts'

import styles from './index.module.scss'

export const EventsSection: FC = () => {
	return (
		<section className={styles.eventsSection}>
			<Container>
				<h4>События</h4>
				<EventsList eventsItems={EventsItems} />
				<Link className={styles.allEventsLink} to={AppRoute.Events}>
					Все события
				</Link>
			</Container>
		</section>
	)
}
