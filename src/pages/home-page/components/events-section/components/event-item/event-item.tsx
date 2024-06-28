import { type FC } from 'react'

import { Link } from 'react-router-dom'
import cnBind from 'classnames/bind'

import { AppRoute } from 'src/routes/main-routes/consts'
import styles from './index.module.scss'

type EventItemProps = {
	id: string
	title: string
	date: string
	ethnoType?: 'rus' | 'bur'
	desc?: string
	isMain?: boolean
}
export const EventItem: FC<EventItemProps> = ({
	title,
	date,
	desc,
	isMain,
	id,
	ethnoType = 'rus',
}) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={cx(styles.eventItem, { _main: isMain }, ethnoType)}>
			<Link to={`/${AppRoute.Events}/${id}`}>
				<h4>{title}</h4>
				<span>{date}</span>
				{desc && <p>{desc}</p>}
			</Link>
		</li>
	)
}
