import { type FC } from 'react'
import { PageContent } from 'src/components/page-content/page-content'
import { Pagination } from 'src/components/pagination/pagination'
import { Helmet } from 'react-helmet-async'
import { UsersTable } from 'src/pages/participation-page/layout/users-list/components/users-table/users-table'

export const UsersList: FC = () => {
	return (
		<PageContent $padding='30px 30px 300px 30px'>
			<Helmet>
				<title>Все участники</title>
			</Helmet>
			<h2>Все участники</h2>
			<UsersTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
