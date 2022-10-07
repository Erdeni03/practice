import TodoItem from '@/components/pages/technology/typescript/TodoItem'

import { TtTodo } from '@/types/tt-todo'

import s from './TodoList.module.scss'

interface TodoListProps {
	list: TtTodo[]
	toggleTodo: (id: TtTodo['id']) => void
	removeTodo: (id: TtTodo['id']) => void
}

const TodoList = ({ list, toggleTodo, removeTodo }: TodoListProps) => {
	return (
		<ul>
			{list.map(todo => (
				<TodoItem
					key={todo.id}
					{...todo}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
				/>
			))}
		</ul>
	)
}

export default TodoList
