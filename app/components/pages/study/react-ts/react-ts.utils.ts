import { GithubUser, LocalGithubUser } from '@/types/react-ts/user.type'

export const isGithubUser = (user: any): user is GithubUser => 'id' in user
export const BASE_URL = 'https://api.github.com/users/'
export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
	login: user.login,
	id: user.id,
	avatar: user.avatar_url,
	name: user.name,
	company: user.company,
	blog: user.blog,
	location: user.location,
	bio: user.bio,
	twitter: user.twitter_username,
	repos: user.public_repos,
	followers: user.followers,
	following: user.following,
	created: user.created_at
})
