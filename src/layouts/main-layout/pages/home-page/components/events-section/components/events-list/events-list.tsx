import { type FC } from 'react'
import { type EventsItemType } from 'src/layouts/main-layout/pages/home-page/components/events-section/types'

import { EventItem } from 'src/layouts/main-layout/pages/home-page/components/events-section/components/event-item/event-item'
import styles from './index.module.scss'

type EventsListProps = {
	eventsItems: EventsItemType[]
}
export const EventsList: FC<EventsListProps> = ({ eventsItems }) => {
	return (
		<ul className={styles.eventsList}>
			{eventsItems?.map((item) => <EventItem key={item.id} {...item} />)}
		</ul>
	)
}
