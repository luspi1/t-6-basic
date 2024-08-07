import { type ReactNode } from 'react'
import { type LinkItem, type RelatedLink, type SourceLink } from 'src/types/global'
import { type ShortDocument } from 'src/types/document'
import { type SelOption } from 'src/types/select'
import { type DateTimeFormatOptions } from 'src/types/date'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import { Link } from 'react-router-dom'

// утилитарная функция для кастомного селекта
export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}

// форматирует дату к формату - 24.03.1999

export const customFormatDate = (
	date?: string | Date,
	options: DateTimeFormatOptions = {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		formatMatcher: 'best fit',
	},
	delimiter: '.' | '-' = '.',
) => {
	if (!date) return

	let formatDate: string | Date

	if (typeof date === 'string') {
		formatDate = new Date(date)
	} else {
		formatDate = date
	}

	return new Intl.DateTimeFormat('ru-RU', options).format(formatDate).replace(/\./g, delimiter)
}

// функция определения возраста по дате рождения

export const calculateAge = (birthDate?: Date | string) => {
	if (!birthDate) return null
	const now: Date = new Date()
	let parsedBirthDate: Date

	if (typeof birthDate === 'string') {
		parsedBirthDate = new Date(birthDate)
	} else {
		parsedBirthDate = birthDate
	}

	const diff: number = now.getTime() - parsedBirthDate.getTime()

	const ageDate: Date = new Date(diff)
	const age = Math.abs(ageDate.getUTCFullYear() - 1970)
	let ageString: string
	if (age % 10 === 1 && age !== 11) {
		ageString = age.toString() + ' год'
	} else if (age % 10 >= 2 && age % 10 <= 4 && (age < 10 || age > 20)) {
		ageString = age.toString() + ' года'
	} else {
		ageString = age.toString() + ' лет'
	}

	return ageString
}

// форматирование номера телефона
export const formatPhoneNumber = (number: string) => {
	return number.replace(/[-()\s]/g, '')
}
export const isNullOrEmpty = (value: ReactNode | ReactNode[]): boolean => {
	if (value == null) {
		return true
	}

	if (typeof value === 'string' && value.trim() === '') {
		return true
	}

	return Array.isArray(value) && value.length === 0
}

// Форматирование ссылок-связей
export const formatRelatedLinks = (data: RelatedLink[] | undefined, link: string) => {
	if (!data) return
	return data.map((linkEl) => (
		<Link to={`/${link}/${linkEl.id}`} key={linkEl.id}>
			{linkEl.title}
		</Link>
	))
}

// Форматирование ссылок на документы
export const formatDocumentLinks = (data: ShortDocument[] | undefined): LinkItem[] | undefined => {
	if (!data) return undefined
	return data.map((docItem) => ({
		id: docItem.id,
		link: docItem.link,
		titleLink: docItem.title,
		type: docItem.type,
		label: [`${docItem.type}-файл`, docItem.size],
	}))
}

// Форматирование ссылок с источником
export const formatSourceLinks = (data: SourceLink[] | undefined): LinkItem[] | undefined => {
	if (!data) return undefined
	return data.map((sourceLinkItem) => ({
		id: sourceLinkItem.id,
		link: sourceLinkItem.link,
		titleLink: sourceLinkItem.title,
		label: [sourceLinkItem.date, sourceLinkItem.source],
	}))
}

// Функция передачи кастомного класса для NavLink

export const setActive = (isActive: boolean, styles: string) => (isActive ? styles : '')

// Функция определения формата файла, принимает имя файла

export const defineFileFormat = (fileName: string) => {
	const formatFileArr = fileName.split('.')
	if (formatFileArr.length < 2) return ''
	return formatFileArr[formatFileArr.length - 1]
}

// функция форматирования даты с локализацией
export const mainFormatDate = (date: Date, dateFormat = 'dd MMMM yyyy'): string => {
	return format(date, dateFormat, { locale: ru })
}

export const formatDateRange = ([startDate, endDate]: [Date, Date]): string => {
	const startMonth = format(startDate, 'MMMM', { locale: ru })
	const endMonth = format(endDate, 'MMMM', { locale: ru })
	const startYear = format(startDate, 'yyyy', { locale: ru })
	const endYear = format(endDate, 'yyyy', { locale: ru })

	if (startMonth === endMonth && startYear === endYear) {
		return `${format(startDate, 'd', { locale: ru })} — ${format(endDate, 'd MMMM yyyy', { locale: ru })}`
	}
	return `${format(startDate, 'd MMMM yyyy', { locale: ru })} — ${format(endDate, 'd MMMM yyyy', { locale: ru })}`
}
