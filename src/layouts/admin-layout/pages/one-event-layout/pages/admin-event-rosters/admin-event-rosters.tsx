import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminEventRosters: FC = () => {
	const { setAdminTitle } = useActions()

	useEffect(() => {
		setAdminTitle('Списки')
		return () => {
			setAdminTitle(null)
		}
	}, [])

	return <AdminContent>Списки контент</AdminContent>
}
