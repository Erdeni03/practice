import classNames from 'classnames'

import UserInfo from '@/components/pages/study/react-ts/UserCard/UserInfo'
import UserStat, {
	UserStatProps
} from '@/components/pages/study/react-ts/UserCard/UserStat'
import UserTitle from '@/components/pages/study/react-ts/UserCard/UserTitle'

import { LocalGithubUser } from '@/types/react-ts/user.type'

import s from './UserCard.module.scss'

interface UserCardProps extends LocalGithubUser {}

const UserCard = (props: UserCardProps) => {
	return (
		<div className={s.card}>
			<img src={props.avatar} alt={props.login} className={s.avatar} />
			<UserTitle login={props.login} name={props.name} created={props.created} />
			<p
				className={classNames(s.bio, {
					[s.empty]: props.bio
				})}
			>
				{props.bio || 'This profile has no bio'}
			</p>
			<UserStat
				repos={props.repos}
				followers={props.followers}
				following={props.following}
			/>
			<UserInfo
				company={props.company}
				blog={props.blog}
				location={props.location}
				twitter={props.twitter}
			/>
		</div>
	)
}

export default UserCard
