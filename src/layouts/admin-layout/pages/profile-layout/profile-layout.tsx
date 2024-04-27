import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { useAppSelector } from 'src/hooks/store'
import { getAdminTitle } from 'src/modules/admin-title/store/admin-title.selectors'
import { TabNavigation } from 'src/layouts/admin-layout/components/tab-navigation/tab-navigation'
import { profileTabs } from 'src/layouts/admin-layout/pages/profile-layout/consts'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
export const ProfileLayout = () => {
	const mainTitle = useAppSelector(getAdminTitle)

	return (
		<>
			<Helmet>
				<title>{mainTitle ?? 'Профиль'}</title>
			</Helmet>
			<div className={adminStyles.adminTitleTab}>
				<h1>{mainTitle ?? 'Профиль'}</h1>
				<TabNavigation navItems={profileTabs} />
			</div>

			<Outlet />
		</>
	)
}
