import Layout from '@/components/layout/Layout'

import s from './Home.module.scss'

const Home = () => {
	return (
		<Layout title='Главная страница'>
			<div className={s.text}>HOME</div>
		</Layout>
	)
}

export default Home
