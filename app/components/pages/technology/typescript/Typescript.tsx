import { ChangeEvent, useEffect, useState } from 'react'

import NewTodoForm from '@/components/pages/technology/typescript/NewTodoForm'
import TodoItem from '@/components/pages/technology/typescript/TodoItem'
import TodoList from '@/components/pages/technology/typescript/TodoList'

import { TtTodo } from '@/types/tt-todo'

import s from './Typescript.module.scss'

const Typescript = () => {
	const [text, setText] = useState('')
	const [todos, setTodos] = useState<TtTodo[]>([])
	// const [todos, setTodos] = useState([''])
	const [test, setTest] = useState<string[] | null>(null)
	const [obj, setObj] = useState<TtTodo>({} as TtTodo)

	const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value)
	}
	const addTodo = () => {
		const newTodo: TtTodo = {
			id: new Date().toString(),
			title: text,
			completed: false
		}
		setTodos([newTodo, ...todos])
		setText('')
	}

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then(res => res.json())
	// 		.then((data: TtTodo[]) => {
	// 			setTodos(data)
	// 		})
	// }, [])

	const toggleTodo = (id: TtTodo['id']) => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) return todo

				return {
					...todo,
					completed: !todo.completed
				}
			})
		)
	}

	const removeTodo = (id: TtTodo['id']) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	return (
		<div>
			{/*<TodoItem*/}
			{/*	title='Todo item'*/}
			{/*	id='123123'*/}
			{/*	completed={false}*/}
			{/*	style={{ border: '1px solid white' }}*/}
			{/*/>*/}

			<NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
			<TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</div>
	)
}

export default Typescript
