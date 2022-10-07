import {
	HiBookmark,
	HiChartBar,
	HiCode,
	HiHome,
	HiLibrary,
	HiOfficeBuilding
} from 'react-icons/hi'

import { IMenuItem } from '@/components/layout/Sidebar/menu/menu.interface'

export const menu: IMenuItem[] = [
	{
		title: 'Главная',
		icon: HiHome,
		link: '/'
	},
	{
		title: 'Интерфейс',
		icon: HiChartBar,
		link: '/interface'
	},
	{
		title: 'Учеба',
		icon: HiBookmark,
		link: '/study'
	},
	{
		title: 'Библиотека',
		icon: HiLibrary,
		link: '/library'
	},
	{
		title: 'Технологии',
		icon: HiCode,
		link: '/technology'
	}
]
