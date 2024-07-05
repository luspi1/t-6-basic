import { type ShortDocument } from 'src/types/document'
import { type SourceLink } from 'src/types/global'
import { type EventsItem } from 'src/types/events'

export type EthnosportDisciplineItem = {
	id: string
	title: string
	categories: string[]
	direction: string
	chapter: string
	participation: string
	gender: string
	category: string
	mainDesc: string
	imgUrl: string
	info: {
		descs: string[]
		relatedLinks: SourceLink[]
		documents: ShortDocument[]
	}
	events: EventsItem[]
}
