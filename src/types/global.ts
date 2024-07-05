import { type ReactNode } from 'react'

export type RelatedLink = {
	id: string
	title: string
}
export type LinkItem = {
	id: string
	link: string
	titleLink: string
	type?: 'doc' | 'pdf'
	label?: ReactNode | ReactNode[]
}

export type SimpleLink = {
	title: string
	link: string
}

export type SourceLink = {
	id: string
	title: string
	link: string
	date: string
	source: string
}
