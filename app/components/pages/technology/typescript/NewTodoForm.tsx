import { ChangeEvent, ChangeEventHandler, useRef } from 'react'

import s from './NewTodoForm.module.scss'

interface NewTodoFormProps {
	value: string
	// onChange: (event: ChangeEvent<HTMLInputElement>) => void
	onChange: ChangeEventHandler<HTMLInputElement>
	// handleClick: () => void
	handleClick: (text: string) => void
}

const NewTodoForm = ({ value, onChange, handleClick }: NewTodoFormProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null) // hover mouse input - ref

	const onClick = () => {
		if (inputRef.current) {
			handleClick(inputRef.current.value)
			inputRef.current.value = ''
		}
	}
	return (
		<>
			<input
				type='text'
				placeholder='new todo'
				value={value}
				// onChange={event => event.target}
				onChange={onChange}
				ref={inputRef}
			/>
			<button onClick={onClick}>ADD TODO</button>
		</>
	)
}

export default NewTodoForm
