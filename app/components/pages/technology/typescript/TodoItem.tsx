import { CSSProperties, FC, ReactNode } from 'react'

import { TtTodo } from '@/types/tt-todo'

import s from './TodoItem.module.scss'

interface ITodoItem extends TtTodo {
	children?: ReactNode
	style?: CSSProperties
	toggleTodo: (id: TtTodo['id']) => void
	removeTodo: (id: TtTodo['id']) => void
}

const TodoItem: FC<ITodoItem> = ({
	id,
	title,
	completed,
	style = {},
	toggleTodo,
	removeTodo
}) => {
	return (
		<>
			<input
				type='checkbox'
				checked={completed}
				style={{ color: 'red', ...style }}
				onChange={() => toggleTodo(id)}
			/>
			<span>{title}</span>
			<span onClick={() => removeTodo(id)}>&times;</span>
		</>
	)
}

export default TodoItem
