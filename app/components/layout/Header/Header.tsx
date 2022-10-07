import IconsRight from '@/components/layout/Header/icons-right/IconsRight'
import Search from '@/components/layout/Header/search/Search'
import Line from '@/components/ui/line/Line'

import s from './Header.module.scss'

const Header = () => {
	return (
		<header>
			<div className={s.header}>
				<Search />
				<IconsRight />
			</div>

			<Line width='md' />
		</header>
	)
}

export default Header
