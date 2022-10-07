import { FormEvent, useRef } from 'react'
import { HiSearch } from 'react-icons/hi'

import Button from '@/components/ui/button/Button'

import s from './Search.module.scss'

interface SearchProps {
	hasError: boolean
	onSubmit: (text: string) => void
}

type FormFields = {
	username: HTMLInputElement
}
const Search = ({ hasError, onSubmit }: SearchProps) => {
	const searchRef = useRef<HTMLInputElement | null>(null)

	const handleSubmit = (event: FormEvent<HTMLFormElement & FormFields>) => {
		event.preventDefault()
		const text = event.currentTarget.username.value
		if (text.trim()) {
			onSubmit(text)
			event.currentTarget.reset()
		}
		// const text = searchRef.current?.value || ''
		// if (text) {
		// 	onSubmit(text)
		// 	if (searchRef.current) searchRef.current.value = ''
		// }
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className={s.search}>
				<label htmlFor='search' className={s.label}>
					<HiSearch />
				</label>
				<input
					ref={searchRef}
					type='text'
					className={s.textField}
					id='search'
					name='username'
					placeholder='Search Github user...'
				/>
				{hasError && <div className={s.error}>No result</div>}
				<Button>Search</Button>
			</div>
		</form>
	)
}

export default Search
