import React, { useState } from 'react'

const AddContact = ({ addContact }) => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [img, setImg] = useState('')

	function handleAdd(e) {
		if (!name || !phone || !img) {
			alert('Some inputs are empty')
			return
		}

		e.preventDefault()

		let newContact = {
			name,
			phone,
			img,
			id: Date.now(),
		}
		setName('')
		setPhone('')
		setImg('')
		addContact(newContact)
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<h2>Add TODO Contact</h2>
			<form>
				<input
					value={name}
					type='text'
					placeholder='Name...'
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					value={phone}
					type='number'
					placeholder='Phone...'
					onChange={(e) => setPhone(e.target.value)}
				/>
				<input
					value={img}
					type='text'
					placeholder='Url...'
					onChange={(e) => setImg(e.target.value)}
				/>
				<button onClick={handleAdd}>Add Contact</button>
			</form>
		</div>
	)
}

export default AddContact
