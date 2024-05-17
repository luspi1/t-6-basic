import { type TabNavigationItem } from 'src/types/navigation'

export const eventReportsSubtabs: TabNavigationItem[] = [
	{
		title: 'Отчеты по пропуску',
		link: '/admin/event-new/event-reports',
		exact: true,
	},
	{
		title: 'Отчеты по питанию',
		link: 'food',
	},
]