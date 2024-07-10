import { type HomeRegion } from 'src/types/home-page'
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
				url: `regions/list/`,
			}),
		}),
	}),
})

export const { useGetHomeRegionsQuery } = homeApi
