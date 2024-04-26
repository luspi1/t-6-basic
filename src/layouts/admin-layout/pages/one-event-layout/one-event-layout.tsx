import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/store'

import { TabNavigation } from 'src/layouts/admin-layout/components/tab-navigation/tab-navigation'
import { oneEventTabs } from 'src/layouts/admin-layout/pages/one-event-layout/consts'
import { getAdminTitle } from 'src/modules/admin-title/store/admin-title.selectors'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
export const OneEventLayout = () => {
	const mainTitle = useAppSelector(getAdminTitle)

	return (
		<>
			<Helmet>
				<title>Профиль события</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>{mainTitle ?? 'События'}</h1>
				<TabNavigation navItems={oneEventTabs} />
			</div>

			<Outlet />
		</>
	)
}
