import { ErrorMessage, Field, Form, Formik, useField } from 'formik'
import { FC, ReactNode } from 'react'
import * as Yup from 'yup'

import s from './Formik.module.scss'

// interface IErrors {
// 	name?: string
// 	email?: string
// }
// const validate = (values: IErrors) => {
// 	const errors: IErrors = {}
//
// 	if (!values.name) {
// 		errors.name = 'Обязательное поле'
// 	} else if (values.name.length < 2) {
// 		errors.name = 'Минимум 2 символа для заполнения!'
// 	}
//
// 	if (!values.email) {
// 		errors.email = 'Обязательное поле'
// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
// 		errors.email = 'Неправильный email адрес'
// 	}
//
// 	return errors
// }
interface IMyTextInput {
	label?: string
	id?: string
	type?: string
	name: string
	children?: ReactNode
}
const MyTextInput: FC<IMyTextInput> = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<input {...props} {...field} />
			{meta.touched && meta.error ? (
				<div className={s.error}>{meta.error}</div>
			) : null}
		</>
	)
}

const MyCheckbox: FC<IMyTextInput> = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' })
	return (
		<>
			<label className={s.checkbox}>
				<input type='checkbox' {...props} {...field} />
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div className={s.error}>{meta.error}</div>
			) : null}
		</>
	)
}

interface IFormik {
	name: string
	email: string
	amount: number
	currency: string
	text: string
	terms: boolean
}
const FormikComponent: FC = () => {
	// const formik = useFormik({
	// initialValues: {
	// 	name: '',
	// 	email: '',
	// 	amount: 0,
	// 	currency: '',
	// 	text: '',
	// 	terms: false
	// },
	// validationSchema: Yup.object({
	// 	name: Yup.string()
	// 		.min(2, 'Минимум 2 символа')
	// 		.required('Обязательное поле!'),
	// 	email: Yup.string()
	// 		.email('Неправильный email адрес')
	// 		.required('Обязательное поле!'),
	// 	amount: Yup.number().min(5, 'Не менее 5').required('Обязательное поле!'),
	// 	currency: Yup.string().required('Выберите валюту!'),
	// 	text: Yup.string().min(10, 'Минимум 10 символа'),
	// 	terms: Yup.boolean()
	// 		.required('Необходимое согласие!')
	// 		.oneOf([true], 'Необходимое согласие!')
	// }),
	// onSubmit: (values: IFormik) => console.log(JSON.stringify(values, null, 2))
	// })

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				amount: 0,
				currency: '',
				text: '',
				terms: false
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(2, 'Минимум 2 символа')
					.required('Обязательное поле!'),
				email: Yup.string()
					.email('Неправильный email адрес')
					.required('Обязательное поле!'),
				amount: Yup.number().min(5, 'Не менее 5').required('Обязательное поле!'),
				currency: Yup.string().required('Выберите валюту!'),
				text: Yup.string().min(10, 'Минимум 10 символа'),
				terms: Yup.boolean()
					.required('Необходимое согласие!')
					.oneOf([true], 'Необходимое согласие!')
			})}
			onSubmit={(values: IFormik) => console.log(JSON.stringify(values, null, 2))}
		>
			<Form
				// onSubmit={formik.handleSubmit}
				className={s.form}
			>
				<h2>Отправить пожертвование</h2>
				{/*<label htmlFor='name'>Ваше имя</label>*/}
				{/*<Field*/}
				{/*	id='name'*/}
				{/*	name='name'*/}
				{/*	type='text'*/}
				{/*{...formik.getFieldProps('name')}*/}
				{/*	// value={formik.values.name}*/}
				{/*	// onChange={formik.handleChange}*/}
				{/*	// onBlur={formik.handleBlur}*/}
				{/*/>*/}
				{/*/!*{formik.errors.name && formik.touched.name ? (*!/*/}
				{/*/!*	<div className={s.error}>{formik.errors.name}</div>*!/*/}
				{/*/!*) : null}*!/*/}
				{/*<ErrorMessage name='name' className={s.error} component='div' />*/}
				<MyTextInput label='Ваше имя' id='name' name='name' type='text' />
				{/*<label htmlFor='email'>Ваша почта</label>*/}
				{/*<Field*/}
				{/*	id='email'*/}
				{/*	name='email'*/}
				{/*	type='email'*/}
				{/*	// value={formik.values.email}*/}
				{/*	// onChange={formik.handleChange}*/}
				{/*	// onBlur={formik.handleBlur}*/}
				{/*/>*/}
				{/*/!*{formik.errors.email && formik.touched.email ? (*!/*/}
				{/*/!*	<div className={s.error}>{formik.errors.email}</div>*!/*/}
				{/*/!*) : null}*!/*/}
				{/*<ErrorMessage name='email' className={s.error} component='div' />*/}
				<MyTextInput label='Ваша почта' id='email' name='email' type='email' />
				<label htmlFor='amount'>Количество</label>
				<Field
					id='amount'
					name='amount'
					type='number'
					// value={formik.values.amount}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
				/>
				{/*{formik.errors.amount && formik.touched.amount ? (*/}
				{/*	<div className={s.error}>{formik.errors.amount}</div>*/}
				{/*) : null}*/}
				<ErrorMessage name='amount' className={s.error} component='div' />
				<label htmlFor='currency'>Валюта</label>
				<Field
					id='currency'
					name='currency'
					as='select'
					// value={formik.values.currency}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
				>
					<option value=''>Выберите валюту</option>
					<option value='USD'>USD</option>
					<option value='UAH'>UAH</option>
					<option value='RUB'>RUB</option>
				</Field>
				{/*{formik.errors.currency && formik.touched.currency ? (*/}
				{/*	<div className={s.error}>{formik.errors.currency}</div>*/}
				{/*) : null}*/}
				<ErrorMessage name='currency' className={s.error} component='div' />
				<label htmlFor='text'>Ваше сообщение</label>
				<Field
					id='text'
					name='text'
					as='textarea'
					// value={formik.values.text}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
				/>
				{/*{formik.errors.text && formik.touched.text ? (*/}
				{/*	<div>{formik.errors.text}</div>*/}
				{/*) : null}*/}
				<ErrorMessage name='text' className={s.error} component='div' />
				{/*<label className={s.checkbox}>*/}
				{/*	<Field*/}
				{/*		name='terms'*/}
				{/*		type='checkbox'*/}
				{/*		// value={formik.values.terms}*/}
				{/*		// onChange={formik.handleChange}*/}
				{/*		// onBlur={formik.handleBlur}*/}
				{/*	/>*/}
				{/*	Соглашаетесь с политикой конфиденциальности?*/}
				{/*</label>*/}
				{/*{formik.errors.terms && formik.touched.terms ? (*/}
				{/*	<div>{formik.errors.terms}</div>*/}
				{/*) : null}*/}
				{/*<ErrorMessage name='terms' className={s.error} component='div' />*/}
				<MyCheckbox name='terms'>
					Соглашаетесь с политикой конфиденциальности?
				</MyCheckbox>
				<button type='submit'>Отправить</button>
			</Form>
		</Formik>
	)
}

export default FormikComponent
