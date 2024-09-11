import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Outlet, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { EventInfoNavItems } from 'src/pages/events-page/layout/events-details/layout/consts'
import { EventInfo } from 'src/pages/events-page/layout/events-details/components/event-info/event-info'

import styles from './index.module.scss'

export const EventDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Events}/:id`])

	if (matchesLocation) return <Navigate to={AppRoute.News} replace />
	return (
		<PageContent
			className={styles.eventDetailsContent}
			$padding='30px 30px 40px 30px'
			$maxWidth='1220px'
		>
			<Helmet>
				<title>Информация о событии</title>
			</Helmet>
			<EventInfo />
			<TabNav className={styles.eventTabs} navItems={EventInfoNavItems} />
			<Outlet />
			<Link className={styles.allEventsLink} to={`/${AppRoute.Events}`}>
				На страницу списка событий
			</Link>
		</PageContent>
	)
}