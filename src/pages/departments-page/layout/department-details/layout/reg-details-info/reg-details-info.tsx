import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'

import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { DepartmentDocuments } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-documents/department-documents'
import { DepartmentLinks } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-links/department-links'
import { AppRoute } from 'src/routes/main-routes/consts'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'

import departmentsStyles from 'src/pages/departments-page/layout/department-details/layout/index.module.scss'
import styles from './index.module.scss'

export const RegDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	return (
		<div>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<RenderedArray
				className={styles.descList}
				strArray={regionData?.descList}
				as='div'
				asStr='p'
				separator=''
			/>
			<DepartmentDocuments {...regionData} />
			<DepartmentLinks {...regionData} />
			<Link className={departmentsStyles.pageMainLink} to={`/${AppRoute.Departments}`}>
				На страницу списка отделений
			</Link>
		</div>
	)
}
