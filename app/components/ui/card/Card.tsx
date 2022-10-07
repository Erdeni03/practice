import Image from 'next/image'
import Link from 'next/link'

import s from './Card.module.scss'

interface CardProps {
	title: string
	imgSrc: string
	desc?: string
	link: string
}
const Card = ({ imgSrc, title, desc, link }: CardProps) => {
	return (
		<div className={s.card}>
			<div className={s.card_img}>
				<Image src={imgSrc} alt='' width={300} height={150} />
			</div>
			<div className={s.card_content}>
				<div className={s.card_title}>
					<h3>{title}</h3>
				</div>
				<div className={s.card_body}>
					<p>{desc}</p>
				</div>
			</div>

			<div className={s.card_btn}>
				<Link href={link}>
					<a>Подробнее</a>
				</Link>
			</div>
		</div>
	)
}

export default Card
