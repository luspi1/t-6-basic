import { type SimpleLink } from 'src/types/global'

export type EventsItem = {
	id: string
	title: string
	contactPerson: string
	partGroup: string
	location: string
	preview: string
	dates: [Date, Date]
	type: string
	desc: string
	organizerLinks: SimpleLink[]
	tags: string[]
	designation: string
}
