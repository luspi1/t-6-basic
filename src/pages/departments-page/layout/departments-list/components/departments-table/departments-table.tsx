import { type RegionItem } from 'src/types/regions'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetAllRegionsQuery } from 'src/store/regions/regions.api'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { Loader } from 'src/components/loader/loader'
import { mainFormatDate } from 'src/helpers/utils'
import { useDebounce } from 'src/hooks/debounce/debounce'

import styles from './index.module.scss'
export const DepartmentsTable = () => {
	const [searchRegion, setSearchRegion] = useState<string>('')
	const debouncedSearch = useDebounce(searchRegion)
	const { data: regionsList, isLoading } = useGetAllRegionsQuery(debouncedSearch)

	const searchDepartments = (value: string) => {
		setSearchRegion(value)
	}

	const tableTitles = [
		'№',
		'Логотип',
		<TableSearch
			wrapperClassName={styles.departmentsSearchWrapper}
			key={2}
			handleSearch={searchDepartments}
			placeholder='Поиск по названию отделения'
		/>,
		'Дата открытия',
	]

	const formatRegionsTableData = (regionsData: RegionItem[]) => {
		return regionsData.map((regionEl, idx) => {
			return [
				String(idx + 1),
				<img src={regionEl.logo} alt={regionEl.title} key={idx} />,
				<Link to={regionEl.regionCode} key={regionEl.regionCode}>
					{regionEl.title}
				</Link>,
				mainFormatDate(regionEl.openDate),
			]
		})
	}

	if (isLoading || !regionsList) return <Loader />

	return (
		<CustomTable
			className={styles.departmentTable}
			cellsData={formatRegionsTableData(regionsList)}
			colTitles={tableTitles}
		/>
	)
}
