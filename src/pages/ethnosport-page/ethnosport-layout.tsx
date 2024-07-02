import { type FC } from 'react'
import { type NavigationItem } from 'src/types/navigation'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { EthnosportMenuItems, ethnosportPageDocuments } from './consts'
import { useGetEthnosportGlobalQuery } from 'src/store/ethnosport/ethnosport.api'

import styles from './index.module.scss'

export const EthnosportLayout: FC = () => {
	const { data: ethnoInfo } = useGetEthnosportGlobalQuery(null)

	const directionsMenuItems: NavigationItem[] = ethnoInfo
		? ethnoInfo.directions.map((directionItem) => ({
				title: directionItem.title,
				link: directionItem.id,
			}))
		: []

	return (
		<div>
			<Container>
				<BreadCrumbs crumbsLinksMap={EthnosportMenuItems} />
				<div className={styles.ethnosportContentWrapper}>
					<Outlet />
					<div>
						<SideMenu
							className={styles.ethnosportSideMenu}
							sideItems={
								[{ title: 'Об этноспорте', link: '/ethnosport' }, ...directionsMenuItems] ?? []
							}
						/>
						<AsideDocuments documents={ethnosportPageDocuments} />
					</div>
				</div>
			</Container>
		</div>
	)
}
