import { type FC } from 'react'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import styles from './index.module.scss'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { SimpleLink } from 'src/components/simple-link/simple-link'

export type DepartmentMainInfoProps = {
	fullTitle?: string
	type?: string
	logo?: string
	mainDesc?: string
	director?: string
	vice?: string
	accountant?: string
	phones?: string[]
	email?: string
	site?: string
	address?: string
	mainInfoLogo?: string
}

export const DepartmentMainInfo: FC<DepartmentMainInfoProps> = ({
	fullTitle,
	director,
	vice,
	accountant,
	phones,
	email,
	site,
	address,
	mainInfoLogo,
}) => {
	return (
		<div className={styles.container}>
			<InfoRow title='Руководитель Отделения:' label={<a href='#'>{director}</a>} />
			<InfoRow title='Первый заместитель:' label={vice} />
			<InfoRow title='Главный бухгалтер:' label={accountant} $margin='0 0 35px 0' />

			<InfoRow title='Телефоны:' label={<RenderedArray strArray={phones} as='span' />} />
			<InfoRow
				title='Электронная почта:'
				label={<SimpleLink title={email} link={email} isEmail />}
			/>
			<InfoRow title='Сайт:' label={<a href={site}>{site}</a>} />
			<InfoRow title='Адрес отделения:' label={address} />
			<InfoRow
				title='Логотип отделения:'
				label={<img src={mainInfoLogo} alt={fullTitle} />}
				wrapperClassname={styles.mainInfoLogo}
				$alignItems='center'
			/>
		</div>
	)
}
