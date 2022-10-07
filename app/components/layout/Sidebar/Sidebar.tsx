import Link from 'next/link'
import { FC } from 'react'

import Menu from '@/components/layout/Sidebar/menu/Menu'
import { menu } from '@/components/layout/Sidebar/menu/menu.data'

import s from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<aside className={s.sidebar}>
			<Link href='/'>
				<a className={s.logo}>Справочник</a>
			</Link>
			<Menu title='Меню' items={menu} />
			<div className={s.copy}>@ 2022 Dashboard training EB</div>
		</aside>
	)
}

export default Sidebar
