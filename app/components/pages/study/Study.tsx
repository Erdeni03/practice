import Layout from '@/components/layout/Layout'
import Card from '@/components/ui/card/Card'

const Study = () => {
	return (
		<Layout title='Учеба'>
			<Card
				imgSrc='/react-ts.png'
				title='react-ts'
				desc='Проект GitHub user finder'
				link='/study/react-ts'
			/>
		</Layout>
	)
}

export default Study
