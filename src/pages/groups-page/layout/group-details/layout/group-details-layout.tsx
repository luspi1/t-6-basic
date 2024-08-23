import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Outlet, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'
import { UserInfo } from 'src/pages/participation-page/layout/user-details/components/user-info/user-info'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { GroupInfoNavItems } from 'src/pages/groups-page/layout/group-details/layout/consts'

import styles from './index.module.scss'

export const GroupDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Groups}/:id`])

	if (matchesLocation) return <Navigate to={AppRoute.GroupsNews} replace />
	return (
		<PageContent
			className={styles.groupDetailsContent}
			$padding='30px 30px 40px 30px'
			$maxWidth='1220px'
		>
			<Helmet>
				<title>Информация о группе</title>
			</Helmet>
			<UserInfo />
			<TabNav className={styles.groupTabs} navItems={GroupInfoNavItems} isTitle />
			<Outlet />
			<Link className={styles.groupsListLink} to={`/${AppRoute.Groups}`}>
				На страницу списка групп
			</Link>
		</PageContent>
	)
}
