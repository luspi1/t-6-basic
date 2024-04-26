import { type FC, useEffect } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { useActions } from 'src/hooks/actions/actions'

export const AdminEventReports: FC = () => {
	const { setAdminTitle } = useActions()

	useEffect(() => {
		setAdminTitle('Отчеты')
		return () => {
			setAdminTitle(null)
		}
	}, [])

	return <AdminContent>Отчеты контент</AdminContent>
}
