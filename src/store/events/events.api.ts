import { type EventsItem } from 'src/types/events'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import type { UserItem } from 'src/types/users'
import type { EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import type { ImageItem } from 'src/types/photos'
import type { NewsItem } from 'src/types/news'
import type { VideoItem } from 'src/types/videos'

export const eventsApi = createApi({
	reducerPath: ReducerPath.Events,
	tagTypes: ['Events', 'EventNews'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getAllEvents: build.query<EventsItem[], { search?: string; year?: string }>({
			query: ({ search = '', year = '' }) => ({
				url: `events`,
				params: {
					q: search,
					y: year,
				},
			}),
		}),
		getEventById: build.query<EventsItem, string>({
			query: (eventId) => ({
				url: `events/${eventId}`,
			}),
		}),
		getEventParticipantes: build.query<UserItem[], [string, string]>({
			query: ([search, eventId]) => ({
				url: `events/${eventId}/participantes`,
				params: {
					q: search,
				},
			}),
		}),
		getEventDisciplines: build.query<EthnosportDisciplineItem[], string>({
			query: (eventId) => ({
				url: `events/${eventId}/disciplines`,
			}),
		}),
		getEventPhoto: build.query<ImageItem[], string>({
			query: (eventId) => ({
				url: `events/${eventId}/photos`,
			}),
		}),
		getEventAllNews: build.query<NewsItem[], { eventId?: string; search?: string; year?: string }>({
			query: ({ eventId = '', search = '', year = '' }) => ({
				url: `events/${eventId}/news`,
				params: {
					q: search,
					y: year,
				},
			}),
			providesTags: ['EventNews'],
		}),
		getEventNewsById: build.query<NewsItem, { eventId?: string; newsId?: string }>({
			query: ({ eventId = '', newsId = '' }) => ({
				url: `events/${eventId}/news/${newsId}`,
			}),
			providesTags: ['EventNews'],
		}),
		getEventNewsVideos: build.query<VideoItem[], string>({
			query: (eventId) => ({
				url: `events/${eventId}/news-videos`,
			}),
		}),
		getEventNewsVideoById: build.query<VideoItem, { eventId?: string; videoId?: string }>({
			query: ({ eventId = '', videoId = '' }) => ({
				url: `events/${eventId}/news-videos/${videoId}`,
			}),
		}),
	}),
})

export const {
	useGetAllEventsQuery,
	useGetEventByIdQuery,
	useLazyGetEventParticipantesQuery,
	useGetEventDisciplinesQuery,
	useGetEventPhotoQuery,
	useGetEventAllNewsQuery,
	useGetEventNewsVideosQuery,
	useGetEventNewsByIdQuery,
	useGetEventNewsVideoByIdQuery,
} = eventsApi
