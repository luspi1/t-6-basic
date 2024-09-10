import React, { type FC } from 'react'

import { DisciplinesList } from 'src/modules/disciplines-list/disciplines-list'
import { useParams } from 'react-router-dom'
import { useGetGroupDisciplinesQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'
import mainEventsStyles from '../index.module.scss'

export const EventDisciplines: FC = () => {
	const { id } = useParams()

	const { data: eventDisciplines } = useGetGroupDisciplinesQuery(id ?? '')
	return (
		<div className={mainEventsStyles.eventTabContent}>
			<section className={styles.eventDisciplinesSection}>
				<DisciplinesList disciplinesData={eventDisciplines} />
			</section>
		</div>
	)
}
