import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import mainGroupsStyles from 'src/pages/groups-page/layout/group-details/layout/index.module.scss'

export const GroupNewsLayout: FC = () => {
	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<Outlet />
		</div>
	)
}
