import { FC } from 'react'

import MenuItem from '@/components/layout/Sidebar/menu/MenuItem'
import { IMenuItem } from '@/components/layout/Sidebar/menu/menu.interface'
import Line from '@/components/ui/line/Line'

import s from './Menu.module.scss'

interface IMenu {
	title: string
	items: IMenuItem[]
}

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<nav className={s.menu}>
			<h3>{title}</h3>
			<ul>
				{items.map(menuItem => (
					<MenuItem key={menuItem.link} item={menuItem} />
				))}
			</ul>
			<Line />
		</nav>
	)
}

export default Menu
