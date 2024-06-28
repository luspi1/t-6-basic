import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { usersApi } from 'src/store/users/users.api'
import { regionsApi } from 'src/store/regions/regions.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'

import { NameSpace } from 'src/helpers/consts'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[regionsApi.reducerPath]: regionsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			regionsApi.middleware,
			usersApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
		),
})

setupListeners(store.dispatch)
