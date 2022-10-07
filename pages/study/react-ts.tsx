import { useState } from 'react'

import Container from '@/components/pages/study/react-ts/Container/Container'
import Search from '@/components/pages/study/react-ts/Search/Search'
import TheHeader from '@/components/pages/study/react-ts/TheHeader/TheHeader'
import UserCard from '@/components/pages/study/react-ts/UserCard/UserCard'
import { defaultUser } from '@/components/pages/study/react-ts/UserCard/user-mock.data'
import {
	BASE_URL,
	extractLocalUser,
	isGithubUser
} from '@/components/pages/study/react-ts/react-ts.utils'

import {
	GithubError,
	GithubUser,
	LocalGithubUser
} from '@/types/react-ts/user.type'

import s from './react-ts.module.scss'

const ReactTs = () => {
	const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

	const fetchUser = async (username: string) => {
		const url = BASE_URL + username
		const res = await fetch(url)
		const user = (await res.json()) as GithubUser | GithubError

		if (isGithubUser(user)) {
			setUser(extractLocalUser(user))
		} else {
			setUser(null)
		}
	}
	return (
		<div className={s.body}>
			<Container>
				<TheHeader />
				<Search hasError={!user} onSubmit={fetchUser} />
				{user && <UserCard {...user} />}
			</Container>
		</div>
	)
}

export default ReactTs
