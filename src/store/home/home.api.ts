import { type HomeEthnoItems, type HomeEventItem, type HomeRegion } from 'src/types/home-page'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { HOME_URL, ReducerPath } from 'src/helpers/consts'

export const homeApi = createApi({
	reducerPath: ReducerPath.Home,
	tagTypes: ['Home'],
	baseQuery: fetchBaseQuery({
		baseUrl: HOME_URL,
	}),
	endpoints: (build) => ({
		getHomeRegions: build.query<HomeRegion[], null>({
			query: () => ({
				url: `regions_list/`,
			}),
		}),
		getHomeEthno: build.query<HomeEthnoItems[], null>({
			query: () => ({
				url: `ethnosport_directions/`,
			}),
		}),
		getHomeEvents: build.query<HomeEventItem[], null>({
			query: () => ({
				url: `events_list/`,
			}),
		}),
	}),
})

export const { useGetHomeRegionsQuery, useGetHomeEthnoQuery, useGetHomeEventsQuery } = homeApi
