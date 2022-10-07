import Layout from '@/components/layout/Layout'
import FormikComponent from '@/components/pages/library/formik/FormikComponent'

import s from './Library.module.scss'

const Library = () => {
	return (
		<Layout title='Библиотека'>
			<div className={s.wrap}>
				<h2 className={s.title}>Formik</h2>
				<FormikComponent />
			</div>
		</Layout>
	)
}

export default Library
