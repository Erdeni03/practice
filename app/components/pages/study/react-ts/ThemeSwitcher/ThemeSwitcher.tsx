import { useEffect, useState } from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

import useDarkMode from '@/hooks/useDarkMode'

import s from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
	const [colorTheme, setTheme] = useDarkMode()

	const ThemeIcon = colorTheme === 'light' ? HiSun : HiMoon
	return (
		<div onClick={() => setTheme(colorTheme)} className={s.switcher}>
			<span>{colorTheme}</span>
			<ThemeIcon className={s.icon} />
		</div>
	)
}

export default ThemeSwitcher
