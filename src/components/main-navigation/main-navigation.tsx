import { type FC } from 'react'

import { Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { AuthSvg } from 'src/UI/icons/authSVG'

import { MainLogoSvg } from 'src/UI/icons/mainLogoSVG'
import { AppRoute } from 'src/routes/main-routes/consts'

import { MenuList } from 'src/components/main-navigation/components/menu-list/menu-list'

import styles from './index.module.scss'
export const MainNavigation: FC = () => {
	return (
		<nav className={styles.mainNav}>
			<Container className={styles.navContainer}>
				<Link to={AppRoute.Home} className={styles.logoWrapper}>
					<MainLogoSvg />
				</Link>
				<MenuList />
				<a href='#' className={styles.authBtn} type='button'>
					Войти
					<AuthSvg />
				</a>
			</Container>
		</nav>
	)
}
