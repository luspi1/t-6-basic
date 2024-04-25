import { type FC } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { EventTitle } from 'src/layouts/admin-layout/components/event-title/event-title'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/layouts/admin-layout/index.module.scss'
import { AdminRoute } from 'src/routes/admin-routes/consts'
export const AdminEventTimetableList: FC = () => {
	return (
		<AdminContent $padding='25px 30px 35px'>
			<p className={adminStyles.adminPrompt}>
				поля, отмеченные символом *, обязательны для заполнения
			</p>
			<EventTitle
				title='Конференция ВООПИК 2024'
				dates={['26 августа 2023 года', '28 августа 2023 года']}
				address='с. Атманов Угол Тамбовской области'
			/>
			<AdminButton
				className={adminStyles.adminViewPageLink}
				as='link'
				to={`/${AdminRoute.AdminHome}/${AdminRoute.AdminEventNew}/${AdminRoute.AdminEventTimetableEdit}`}
				$margin='0 0 29px 0'
				$outlined
			>
				Перейти к редактированию расписания
			</AdminButton>
			<p>таблица</p>
		</AdminContent>
	)
}
