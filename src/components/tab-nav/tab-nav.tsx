import React, { type FC, useEffect, useState } from 'react'
import { type TabNavigationItem } from 'src/types/navigation'
import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom'

import styles from './index.module.scss'

type TabNavProps = {
	navItems: TabNavigationItem[]
	isTitle?: boolean
	className?: string
}
export const TabNav: FC<TabNavProps> = ({ navItems, isTitle = false, className }) => {
	const location = useLocation()

	const [activeTitle, setActiveTitle] = useState<string>(navItems[0].title)
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''

	useEffect(() => {
		if (isTitle) {
			const currentLocation = location.pathname.split('/').at(-1)
			const currentNavItem = navItems.find((item) => item.link === currentLocation)
			if (currentNavItem) {
				setActiveTitle(currentNavItem.title)
			} else {
				setActiveTitle(navItems[0].title)
			}
		}
	}, [location.pathname])

	return (
		<nav className={cn(styles.tabNavWrapper, className)}>
			{isTitle && <h5>{activeTitle}</h5>}
			<ul className={styles.tabNav}>
				{navItems?.map((navItem) => (
					<li key={navItem.title}>
						<NavLink className={setActive} to={navItem.link} end={navItem.exact}>
							{navItem.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
