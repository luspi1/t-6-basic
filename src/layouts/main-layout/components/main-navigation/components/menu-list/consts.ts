import { type NavigationItem } from 'src/types/navigation'

export const MenuItems: NavigationItem[] = [
	{
		title: 'федерация',
		link: 'about',
	},
	{
		title: 'отделения',
		link: 'departments-list',
	},
	{
		title: 'этноспорт',
		link: 'ethnosport',
	},

	{
		title: 'участие',
		link: 'users-list',
	},
	{
		title: 'библиотека',
		link: 'library',
	},
	{
		title: 'события',
		link: 'events',
		accent: true,
	},
]
