import { type FC } from 'react'
import { type HomeEventItem } from 'src/types/home-page'

import { Link } from 'react-router-dom'
import cnBind from 'classnames/bind'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
import { customFormatDate } from 'src/helpers/utils'

type EventItemProps = HomeEventItem
export const HomeEvent: FC<EventItemProps> = ({
	title,
	date,
	desc,
	ismain,
	id,
	ethnoType = 'rus',
}) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={cx(styles.eventItem, { _main: ismain }, ethnoType)}>
			<Link to={`/${AppRoute.Events}/${id}`}>
				<h4>{title}</h4>
				<span>
					{customFormatDate(date[0])} - {customFormatDate(date[1])}
				</span>
				{desc && <p>{desc}</p>}
			</Link>
		</li>
	)
}
