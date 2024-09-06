import { type SimpleLink, type SourceLink } from 'src/types/global'
import { type NewsItem } from 'src/types/news'
import { type VideoItem } from 'src/types/videos'
import { type ImageItem } from 'src/types/photos'

export type EventsItem = {
	id: string
	countHeld: number
	countHeldPlan: string
	eventsInterval: string
	category: string
	sections: string[]
	region: string
	relevance: string
	title: string
	contactPerson: string
	partGroup: string
	location: string
	preview: string
	dates: [Date, Date]
	type: string
	desc: string
	descs: string[]
	organizerLinks: SimpleLink[]
	news: NewsItem[]
	newsVideos: VideoItem[]
	events: EventsItem[]
	photos: ImageItem[]
	relatedLinks: SourceLink[]
	tags: string[]
	designation: string
}
