import { useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

import ThemeSwitcher from '@/components/pages/study/react-ts/ThemeSwitcher/ThemeSwitcher'

import s from './TheHeader.module.scss'

const TheHeader = () => {
	return (
		<div className={s.header}>
			<div className={s.logo}>devfinder</div>
			<ThemeSwitcher />
		</div>
	)
}

export default TheHeader
