import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/Sidebar/menu/menu.interface'

import s from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath, pathname } = useRouter()
	return (
		<li>
			<Link href={item.link}>
				<a className={asPath === item.link ? s.active : ''}>
					<span className={item.image ? s.image : ''}>
						{item.icon && <item.icon />}
						{item.image && (
							<Image src={item.image} height={40} width={40} alt={item.title} />
						)}
					</span>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
