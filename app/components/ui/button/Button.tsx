import { MouseEventHandler } from 'react'

import s from './Button.module.scss'

interface ButtonProps {
	children: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={s.button}>
			{children}
		</button>
	)
}

export default Button
