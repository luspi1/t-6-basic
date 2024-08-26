import { type GroupItem } from 'src/types/groups'
import { type EventsItem } from 'src/types/events'
import { type UserItem } from 'src/types/users'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'

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
		getGroupEvent: build.query<EventsItem[], [string, string]>({
			query: ([search, groupId]) => ({
				url: `groups/${groupId}/event`,
				params: {
					q: search,
				},
			}),
		}),
		getGroupParticipantes: build.query<UserItem[], [string, string]>({
			query: ([search, groupId]) => ({
				url: `groups/${groupId}/participantes`,
				params: {
					q: search,
				},
			}),
		}),
		getGroupTable: build.query<GroupItem[], [string, string]>({
			query: ([search, groupId]) => ({
				url: `groups/${groupId}/table`,
				params: {
					q: search,
				},
			}),
		}),
		getGroupDisciplines: build.query<EthnosportDisciplineItem[], string>({
			query: (groupId) => ({
				url: `groups/${groupId}/disciplines`,
			}),
		}),
		// getGroupPhoto: build.query<ImageItem[], string>({
		// 	query: (userId) => ({
		// 		url: `users/${userId}/photo`,
		// 	}),
		// }),
	}),
})

export const {
	useGetAllGroupsQuery,
	useGetGroupByIdQuery,
	useGetGroupEventQuery,
	useGetGroupParticipantesQuery,
	useGetGroupTableQuery,
	useGetGroupDisciplinesQuery,
} = groupsApi
