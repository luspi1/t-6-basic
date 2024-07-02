import { type FC } from 'react'
import { type NavigationItem } from 'src/types/navigation'
import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'

type TabNavProps = {
	navItems: NavigationItem[]
}
export const TabNav: FC<TabNavProps> = ({ navItems }) => {
	const setActive = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${styles.activeLink}` : ''

	return (
		<nav>
			<ul className={styles.tabNav}>
				{navItems?.map((navItem) => (
					<li key={navItem.title}>
						<NavLink className={setActive} to={navItem.link}>
							{navItem.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}