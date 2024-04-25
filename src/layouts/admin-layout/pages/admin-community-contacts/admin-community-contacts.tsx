import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type ContactsInputs,
	contactsSchema,
} from 'src/layouts/admin-layout/pages/admin-community-contacts/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminControllers } from 'src/layouts/admin-layout/components/admin-controllers/admin-controllers'
import { AppRoute } from 'src/routes/main-routes/consts'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { MapSection } from 'src/layouts/admin-layout/pages/admin-community-contacts/components/map-section/map-section'
import { MailSection } from 'src/layouts/admin-layout/pages/admin-community-contacts/components/mail-section/mail-section'
import { PhoneSection } from 'src/layouts/admin-layout/pages/admin-community-contacts/components/phones-section/phone-section'
import { EmailsSection } from 'src/layouts/admin-layout/pages/admin-community-contacts/components/emails-section/emails-section'
import { LinksSection } from 'src/layouts/admin-layout/pages/admin-community-contacts/components/links-section/links-section'
import adminStyles from 'src/layouts/admin-layout/index.module.scss'

export const AdminCommunityContacts: FC = () => {
	const methods = useForm<ContactsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(contactsSchema),
		defaultValues: {
			mailSection: true,
			phonesSection: true,
			phoneNumbers: [
				{
					phoneOwner: '',
					phoneAddress: '',
					phoneNumber: '',
				},
			],
			emailsSection: true,
			emails: [{ emailOwner: '', emailAddress: '' }],
			linksSection: true,
			links: [{ linkText: '', linkAddress: '' }],
		},
	})

	const onSubmit: SubmitHandler<ContactsInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Контакты и связь</title>
			</Helmet>
			<h1>Контакты и связь</h1>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/${AppRoute.About}/${AppRoute.AboutContacts}`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<MapSection />
						<MailSection />
						<PhoneSection />
						<EmailsSection />
						<LinksSection />
						<AdminControllers outLink={`/${AdminRoute.AdminHome}`} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
