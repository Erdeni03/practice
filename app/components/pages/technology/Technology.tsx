import Layout from '@/components/layout/Layout'
import Typescript from '@/components/pages/technology/typescript/Typescript'

import s from './Technology.module.scss'

const Technology = () => {
	return (
		<Layout title='Технологии'>
			<div>
				<h3 className={s.title}>Typescript</h3>
				<Typescript />
			</div>
		</Layout>
	)
}

export default Technology
