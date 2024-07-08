import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { MainLayout } from 'src/routes/main-layout/main-layout'

import { HomePage } from 'src/pages/home-page/home-page'

import { AboutLayout } from 'src/pages/about-page/about-layout'
import { AboutGeneral } from 'src/pages/about-page/layout/about-general/about-general'
import { AboutHistory } from 'src/pages/about-page/layout/about-history/about-history'
import { AboutDirection } from 'src/pages/about-page/layout/about-direction/about-direction'
import { AboutContacts } from 'src/pages/about-page/layout/about-contacts/about-contacts'
import { AboutDocuments } from 'src/pages/about-page/layout/about-documents/about-documents'
import { AboutMediakit } from 'src/pages/about-page/layout/about-mediakit/about-mediakit'

import { DepartmentsLayout } from 'src/pages/departments-page/layout/departments-layout'
import { DepartmentsList } from 'src/pages/departments-page/layout/departments-list/departments-list'
import { DepartmentsAbout } from 'src/pages/departments-page/layout/departments-about/departments-about'
import { DepartmentDetailsLayout } from 'src/pages/departments-page/layout/department-details/layout/department-details-layout'

import { EthnosportLayout } from 'src/pages/ethnosport-page/ethnosport-layout'
import { EthnoGeneral } from 'src/pages/ethnosport-page/layout/ethno-general/ethno-general'
import { EthnoDetails } from 'src/pages/ethnosport-page/layout/ethno-details/ethno-details'
import { EthnoDetailsInfo } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-info/ethno-details-info'
import { EthnoDetailsHistory } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-history/ethno-details-history'
import { EthnoDetailsDisciplines } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-disciplines/ethno-details-disciplines'
import { EthnoDetailsEvents } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-events/ethno-details-events'
import { EthnoDetailsParticipants } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-participants/ethno-details-participants'

import { DisciplinesLayout } from 'src/pages/disciplines-page/disciplines-layout'
import { Disciplines } from 'src/pages/disciplines-page/layout/disciplines/disciplines'
import { DisciplineDetails } from 'src/pages/disciplines-page/layout/discipline-details/discipline-details'
import { DisDetailsInfo } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-info/dis-details-info'
import { DisDetailsEvents } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-events/dis-details-events'
import { DisDetailsGallery } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/dis-details-gallery'
import { DisGalleryPhotos } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/layout/dis-gallery-photos/dis-gallery-photos'
import { DisGalleryVideos } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/layout/dis-gallery-videos/dis-gallery-videos'

import { RegDetailsInfo } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/reg-details-info'
import { RegDetailsParticipants } from 'src/pages/departments-page/layout/department-details/layout/reg-details-participants/reg-details-participants'
import { RegDetailsEvents } from 'src/pages/departments-page/layout/department-details/layout/reg-details-events/reg-details-events'
import { RegDetailsObjects } from 'src/pages/departments-page/layout/department-details/layout/reg-details-objects/reg-details-objects'
import { RegDetailsProjects } from 'src/pages/departments-page/layout/department-details/layout/reg-details-projects/reg-details-projects'
import { RegDetailsGallery } from 'src/pages/departments-page/layout/department-details/layout/reg-details-gallery/reg-details-gallery'

import { ParticipationLayout } from 'src/pages/participation-page/layout/participation-layout'

import { UsersList } from 'src/pages/participation-page/layout/users-list/users-list'
import { UserDetailsLayout } from 'src/pages/participation-page/layout/user-details/layout/user-details-layout'
import { UserDetails } from 'src/pages/participation-page/layout/user-details/layout/user-details/user-details'
import { UserGroups } from 'src/pages/participation-page/layout/user-details/layout/user-groups/user-groups'
import { UserEvents } from 'src/pages/participation-page/layout/user-details/layout/user-events/user-events'
import { UserProjects } from 'src/pages/participation-page/layout/user-details/layout/user-projects/user-projects'
import { UserObjects } from 'src/pages/participation-page/layout/user-details/layout/user-objects/user-objects'
import { UserGallery } from 'src/pages/participation-page/layout/user-details/layout/user-gallery/user-gallery'

import { NewsLayout } from 'src/pages/news-page/layout/news-layout'
import { NewsList } from 'src/pages/news-page/layout/news-list/news-list'
import { NewsDetails } from 'src/pages/news-page/layout/news-details/news-details'

import { EventsLayout } from 'src/pages/events-page/events-layout'
import { EventsList } from 'src/pages/events-page/layout/events-list/events-list'
import { EventDetails } from 'src/pages/events-page/layout/events-details/event-details'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<MainLayout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />

				<Route path={AppRoute.About} element={<AboutLayout />}>
					<Route index element={<AboutGeneral />} />
					<Route path={AppRoute.AboutHistory} element={<AboutHistory />} />
					<Route path={AppRoute.AboutDirection} element={<AboutDirection />} />
					<Route path={AppRoute.AboutContacts} element={<AboutContacts />} />
					<Route path={AppRoute.AboutDocuments} element={<AboutDocuments />} />
					<Route path={AppRoute.AboutMediakit} element={<AboutMediakit />} />
				</Route>

				<Route path={AppRoute.Departments} element={<DepartmentsLayout />}>
					<Route index element={<DepartmentsList />} />
					<Route path={AppRoute.DepartmentsAbout} element={<DepartmentsAbout />} />
					<Route path=':id' element={<DepartmentDetailsLayout />}>
						<Route path={AppRoute.DepartmentsDetailsInfo} element={<RegDetailsInfo />} />
						<Route
							path={AppRoute.DepartmentsDetailsParticipant}
							element={<RegDetailsParticipants />}
						/>
						<Route path={AppRoute.DepartmentsDetailsEvents} element={<RegDetailsEvents />} />
						<Route path={AppRoute.DepartmentsDetailsObjects} element={<RegDetailsObjects />} />
						<Route path={AppRoute.DepartmentsDetailsProjects} element={<RegDetailsProjects />} />
						<Route path={AppRoute.DepartmentsDetailsGallery} element={<RegDetailsGallery />} />
					</Route>
				</Route>

				<Route path={AppRoute.Ethnosport} element={<EthnosportLayout />}>
					<Route index element={<EthnoGeneral />} />
					<Route path=':id' element={<EthnoDetails />}>
						<Route index element={<EthnoDetailsInfo />} />
						<Route path={AppRoute.EthnoHistory} element={<EthnoDetailsHistory />} />
						<Route path={AppRoute.EthnoDisciplines} element={<EthnoDetailsDisciplines />} />
						<Route path={AppRoute.EthnoEvents} element={<EthnoDetailsEvents />} />
						<Route path={AppRoute.EthnoParticipants} element={<EthnoDetailsParticipants />} />
					</Route>
				</Route>

				<Route path={AppRoute.Disciplines} element={<DisciplinesLayout />}>
					<Route index element={<Disciplines />} />
					<Route path=':id' element={<DisciplineDetails />}>
						<Route index element={<DisDetailsInfo />} />
						<Route path={AppRoute.DisEvents} element={<DisDetailsEvents />} />
						<Route path={AppRoute.DisGallery} element={<DisDetailsGallery />}>
							<Route index element={<DisGalleryPhotos />} />
							<Route path={AppRoute.DisGalleryVideos} element={<DisGalleryVideos />} />
						</Route>
					</Route>
				</Route>

				<Route path={AppRoute.Users} element={<ParticipationLayout />}>
					<Route index element={<UsersList />} />
					<Route path=':id' element={<UserDetailsLayout />}>
						<Route path={AppRoute.UserInfo} element={<UserDetails />} />
						<Route path={AppRoute.UserGroups} element={<UserGroups />} />
						<Route path={AppRoute.UserEvents} element={<UserEvents />} />
						<Route path={AppRoute.UserProjects} element={<UserProjects />} />
						<Route path={AppRoute.UserObjects} element={<UserObjects />} />
						<Route path={AppRoute.UserGallery} element={<UserGallery />} />
					</Route>
				</Route>

				<Route path={AppRoute.News} element={<NewsLayout />}>
					<Route index element={<NewsList />} />
					<Route path=':id' element={<NewsDetails />} />
				</Route>
				<Route path={AppRoute.Events} element={<EventsLayout />}>
					<Route index element={<EventsList />} />
					<Route path=':id' element={<EventDetails />} />
				</Route>
			</Route>
		</Routes>
	)
}
