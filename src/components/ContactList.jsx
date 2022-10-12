import React, { useState, useEffect } from 'react'
import ContactCard from './ContactCard'
import { Modal, Button, FormControl } from 'react-bootstrap'

const ContactList = ({
	handleClose,
	contacts,
	deleteUser,
	handleEdit,
	editContact,
	showEditModal,
	handleEditClose,
	handleSave,
}) => {
	const [contact, setContact] = useState(editContact)

	useEffect(() => {
		if (editContact) {
			setContact(editContact)
		}
	}, [editContact])

	function saveChanges() {
		handleSave(contact)
	}

	const editName = (e) => {
		let newObj = {
			...contact,
			name: e.target.value,
		}
		setContact(newObj)
		console.log(newObj)
	}
	const editPhone = (e) => {
		let newObj = {
			...contact,
			phone: e.target.value,
		}
		setContact(newObj)
	}
	const editImg = (e) => {
		let newObj = {
			...contact,
			img: e.target.value,
		}
		setContact(newObj)
	}

	return (
		<>
			{/* <h2 style={{ textAlign: 'center' }}>Contacts</h2> */}
			<div className='contactList'>
				{contacts?.map((item) => (
					<ContactCard
						key={item.id}
						item={item}
						deleteUser={deleteUser}
						handleEdit={handleEdit}
						editContact={editContact}
					/>
				))}
			</div>
			<Modal show={showEditModal} onHide={handleEditClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormControl
						value={contact.name || ''}
						onChange={editName}
						size='sm'
						style={{ border: '1px solid black', margin: '10px' }}
					/>
					<FormControl
						value={contact.phone || ''}
						onChange={editPhone}
						size='sm'
						style={{ border: '1px solid black', margin: '10px' }}
					/>
					<FormControl
						value={contact.img || ''}
						onChange={editImg}
						size='sm'
						style={{ border: '1px solid black', margin: '10px' }}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={saveChanges}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default ContactList
