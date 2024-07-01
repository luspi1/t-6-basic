import { type FC } from 'react'

import { Outlet, useParams } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { EthnosportMenuItems, ethnosportPageDocuments } from './consts'

import styles from './index.module.scss'

export const EthnosportLayout: FC = () => {
	const { id } = useParams()
	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						...EthnosportMenuItems,
						{
							title: 'Об этноспорте',
							link: 'ethnosport',
						},
					]}
				/>
				<div className={styles.ethnosportContentWrapper}>
					<Outlet />

					{!id && (
						<div>
							<SideMenu className={styles.ethnosportSideMenu} sideItems={EthnosportMenuItems} />
							<AsideDocuments documents={ethnosportPageDocuments} />
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
