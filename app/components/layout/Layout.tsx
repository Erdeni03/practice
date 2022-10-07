import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from '@/components/layout/Header/Header'
import Sidebar from '@/components/layout/Sidebar/Sidebar'

import s from './Layout.module.scss'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={s.main}>
				<Sidebar />
				<section className={s.content}>
					<Header />
					<div className={s.wrapper}>{children}</div>
				</section>
			</main>
		</>
	)
}

export default Layout
