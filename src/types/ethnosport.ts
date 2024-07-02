import { type GalleryPhoto } from 'src/types/photos'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import { type EventsItem } from 'src/types/events'

export type EthnosportDirection = {
	id: string
	title: string
	mainDesc: string
	logo: string
	info: {
		mainDesc: string
		photos: GalleryPhoto[]
		descs: string[]
	}
	history: {
		mainDesc: string
		chronology: Array<{ date: string; text: string }>
	}
	disciplines: EthnosportDisciplineItem[]
	events: EventsItem[]
	participants: [Array<{ id: string; fullname: string }>]
}

export type EthnosportGlobal = {
	mainDesc: string
	descs: string[]
	photos: GalleryPhoto[]
	directions: EthnosportDirection[]
}
