import React, { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'

import { EventsList } from 'src/modules/events-list/events-list'

import styles from './index.module.scss'

export const EthnoDetailsEvents: FC = () => {
	const { id } = useParams()

	return (
		<section>
			<EventsList id={id} />
			<Link className={styles.allEventsLink} to={`/${AppRoute.Events}`}>
				Перейти в раздел Все события
			</Link>
		</section>
	)
}
