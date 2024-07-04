import React, { type FC } from 'react'
import { type EventSearchInputs } from 'src/modules/events-list/schema'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { Link } from 'react-router-dom'
import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'

type EventsListProps = {
	id?: string
	className?: string
}
export const EventsList: FC<EventsListProps> = ({ id, className }) => {
	const methods = useForm<EventSearchInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<EventSearchInputs> = (data) => {
		console.log(data)
	}
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')

	if (isLoading) return <Loader />
	if (!ethnoDetails) return null
	const { events: directionEvents } = ethnoDetails

	return (
		<div className={cn(styles.eventsListWrapper, className)}>
			<FormProvider {...methods}>
				<form className={styles.eventSearchForm} onSubmit={methods.handleSubmit(onSubmit)}>
					<ControlledSelect
						className={styles.eventSearchSelect}
						selectOptions={[
							{ label: 'Все события', value: '0' },
							{ label: 'Событие 1', value: '1' },
							{ label: 'Событие 2', value: '2' },
						]}
						name='category'
					/>
					<ControlledInput
						className={styles.eventSearchInput}
						name='title'
						placeholder='Поиск по названию события'
					/>
					<ControlledSelect
						className={styles.eventSearchSelect}
						selectOptions={[
							{ label: 'Тип события', value: '0' },
							{ label: 'Тип 1', value: '1' },
							{ label: 'Тип 2', value: '2' },
						]}
						name='type'
					/>
					<MainButton as='button' type='submit'>
						Найти
					</MainButton>
				</form>
			</FormProvider>
			<ul className={styles.eventsList}>
				{directionEvents?.map((eventEl) => (
					<li key={eventEl.id}>
						<div className={styles.eventElInfo}>
							<p>
								<span>{eventEl.dates[0]} -</span> <span>{eventEl.dates[1]}</span>
							</p>
							<span>{eventEl.location}</span>
							<Link to={`/events/${eventEl.id}`}>Регистрация</Link>
						</div>
						<div className={styles.eventElContent}>
							<h5>{eventEl.title}</h5>
							<div className={styles.eventElOrganizers}>
								{eventEl?.organizerLinks?.map((orgLink, idx) => (
									<a key={idx} href={orgLink.link}>
										{orgLink.title}
									</a>
								))}
							</div>
							<p className={styles.eventElDesc}>Особенности события: {eventEl.desc}</p>
							<div className={styles.eventElBottom}>
								<ul>{eventEl?.tags?.map((orgTag, idx) => <li key={idx}>{orgTag}</li>)}</ul>
							</div>
						</div>
						<div className={styles.eventElImg}>
							<img src={eventEl.preview} alt={eventEl.title} />
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
