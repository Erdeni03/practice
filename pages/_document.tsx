import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='icon' href='/favicon.ico' type='image/svg+xml' />
				<meta name='theme-color' content='#FF7652' />
				<meta name='msapplication-navbutton-color' content='#FF7652' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#FF7652' />
				{/*<link*/}
				{/*	href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap'*/}
				{/*	rel='stylesheet'*/}
				{/*/>*/}
			</Head>
			<body className='light'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
