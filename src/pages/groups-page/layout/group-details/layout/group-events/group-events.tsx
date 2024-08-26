import { type FC, useState } from 'react'

import { useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'

import { Loader } from 'src/components/loader/loader'
import { EventsList } from 'src/modules/events-list/events-list'
import { useGetGroupEventQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'

export const GroupEvents: FC = () => {
	const [searchEvents] = useState<string>('')
	const debouncedSearch = useDebounce(searchEvents)

	const { id } = useParams()

	const { data: eventList, isLoading } = useGetGroupEventQuery([debouncedSearch, id ?? ''])

	if (isLoading || !eventList) return <Loader />

	return (
		<section className={styles.groupEventsSection}>
			<EventsList eventsData={eventList} eventDesignation />
		</section>
	)
}
