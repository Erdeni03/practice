import { FaTwitter } from 'react-icons/fa'
import {
	HiAnnotation,
	HiLocationMarker,
	HiOfficeBuilding
} from 'react-icons/hi'

import InfoItem, {
	InfoItemProps
} from '@/components/pages/study/react-ts/UserCard/InfoItem'

import { LocalGithubUser } from '@/types/react-ts/user.type'

import s from './UserInfo.module.scss'

interface UserInfoProps
	extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}
const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: <HiLocationMarker />,
			text: location
		},
		{
			icon: <HiAnnotation />,
			text: blog,
			isLink: true
		},
		{
			icon: <FaTwitter />,
			text: twitter
		},
		{
			icon: <HiOfficeBuilding />,
			text: company
		}
	]
	return (
		<div className={s.userInfo}>
			{items.map((item, idx) => (
				<InfoItem {...item} key={idx} />
			))}
		</div>
	)
}

export default UserInfo
