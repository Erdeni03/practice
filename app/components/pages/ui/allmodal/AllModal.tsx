import { useState } from 'react'

import Modal from '@/components/ui/modal/Modal'

import s from './AllModal.module.scss'

const AllModal = () => {
	const [stModal, setStModal] = useState(false)

	return (
		<div className={s.modal}>
			<h2 className={s.title}>Модальные окна (Pop-up)</h2>

			<button onClick={() => setStModal(true)} className={s.stBtn}>
				Standard modal
			</button>
			<Modal active={stModal} setActive={setStModal}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut autem
					culpa cupiditate, doloremque eligendi error excepturi expedita inventore
					nemo neque nesciunt numquam optio quaerat reprehenderit rerum, similique,
					sunt veniam!
				</p>
			</Modal>
		</div>
	)
}

export default AllModal
