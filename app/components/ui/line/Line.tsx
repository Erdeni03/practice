import classNames from 'classnames'
import { FC } from 'react'

import s from './Line.module.scss'

const Line: FC<{ width: number }> = ({ width = 'xs' }) => {
	return (
		<div
			className={classNames(s.line, {
				[s.md]: width === 'md',
				[s.xl]: width === 'xl'
			})}
		/>
	)
}

export default Line
