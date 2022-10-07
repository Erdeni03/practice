import classNames from 'classnames'
import { FC, ReactNode } from 'react'

import s from './Modal.module.scss'

interface IModal {
	active: boolean
	setActive: (flag: boolean) => void
	children: ReactNode
}

const Modal: FC<IModal> = ({ active, setActive, children }) => {
	return (
		<div
			onClick={() => setActive(false)}
			className={classNames(s.modal, {
				[s.active]: active
			})}
		>
			<div
				onClick={e => e.stopPropagation()}
				className={classNames(s.modal_content, {
					[s.active]: active
				})}
			>
				{children}
			</div>
		</div>
	)
}

export default Modal
