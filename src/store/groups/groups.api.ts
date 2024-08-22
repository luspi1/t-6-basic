import { type GroupItem } from 'src/types/groups'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'

export const groupsApi = createApi({
	reducerPath: ReducerPath.Groups,
	tagTypes: ['Groups'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllGroups: build.query<GroupItem[], string>({
			query: (search) => ({
				url: 'groups',
				params: {
					q: search,
				},
			}),
		}),
		getGroupById: build.query<GroupItem, string>({
			query: (groupId) => ({
				url: `groups/${groupId}`,
			}),
		}),
		// getGroupGroup: build.query<GroupItem[], [string, string]>({
		// 	query: ([search, userId]) => ({
		// 		url: `users/${userId}/group`,
		// 		params: {
		// 			q: search,
		// 		},
		// 	}),
		// }),
		// getGroupEvent: build.query<EventsItem[], [string, string]>({
		// 	query: ([search, userId]) => ({
		// 		url: `users/${userId}/event`,
		// 		params: {
		// 			q: search,
		// 		},
		// 	}),
		// }),
		// getGroupMaterials: build.query<MaterialItem[], [string, string]>({
		// 	query: ([search, userId]) => ({
		// 		url: `users/${userId}/materials`,
		// 		params: {
		// 			q: search,
		// 		},
		// 	}),
		// }),
		// getGroupDisciplines: build.query<EthnosportDisciplineItem[], string>({
		// 	query: (userId) => ({
		// 		url: `users/${userId}/disciplines`,
		// 	}),
		// }),
		// getGroupPhoto: build.query<ImageItem[], string>({
		// 	query: (userId) => ({
		// 		url: `users/${userId}/photo`,
		// 	}),
		// }),
	}),
})

export const { useGetAllGroupsQuery, useGetGroupByIdQuery } = groupsApi
