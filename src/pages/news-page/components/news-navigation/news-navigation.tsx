import { type FC } from 'react'

import { NavLink } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'
import cn from 'classnames'

type NewsNavigationProps = {
	activeLink: 'news' | 'videos'
}
export const NewsNavigation: FC<NewsNavigationProps> = ({ activeLink = 'news' }) => {
	return (
		<nav className={styles.newsNav}>
			<NavLink
				to={`/${AppRoute.News}`}
				className={cn({ [styles.activeLink]: activeLink === 'news' })}
			>
				Новости
			</NavLink>
			<NavLink
				to={AppRoute.NewsVideo}
				className={cn({ [styles.activeLink]: activeLink === 'videos' })}
			>
				Видеолента
			</NavLink>
		</nav>
	)
}
