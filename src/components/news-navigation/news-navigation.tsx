import React, { type FC } from 'react'

import { useLocation } from 'react-router-dom'

import { TabNav } from 'src/components/tab-nav/tab-nav'
import cn from 'classnames'

import styles from './index.module.scss'

type NewsNavigationProps = {
	className?: string
}

export const NewsNavigation: FC<NewsNavigationProps> = ({ className }) => {
	const location = useLocation()
	const isDetailPage =
		/\/news\/\d+$/.test(location.pathname) || /\/news\/news-video\/\d+$/.test(location.pathname)
	return (
		<div className={cn(styles.newsNav, className)}>
			{!isDetailPage && (
				<TabNav
					className={styles.newsTabs}
					activeClassName={styles.activeNewsTab}
					navItems={[
						{ title: 'Новости', link: '', exact: true },
						{ title: 'Видеолента', link: 'news-video' },
					]}
				/>
			)}
		</div>
	)
}
