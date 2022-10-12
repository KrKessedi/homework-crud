import React, { useState } from 'react'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import './App.css'

function App() {
	const [showEditModal, setShowEditModal] = useState(false)
	const handleEditClose = () => setShowEditModal(false)
	const handleEditShow = () => setShowEditModal(true)
	const [editContact, setEditContact] = useState({
		name: 'Hello',
		phone: 123,
		id: 1,
		img: 'asdkfj',
	})

	function handleEdit(id) {
		let obj = contacts.find((item) => item.id === id)
		setEditContact(obj)
		setShowEditModal(true)
		console.log(obj)
	}

	const [contacts, setContacts] = useState([])

	function deleteUser(id) {
		console.log(contacts)
		let newContacts = [...contacts]
		newContacts = newContacts.filter((item) => item.id !== id)
		setContacts(newContacts)
	}

	function addContact(newObj) {
		let newContact = [...contacts]
		newContact.push(newObj)
		setContacts(newContact)
	}

	function handleSave(obj) {
		let newContact = contacts.map((item) => {
			if (item.id === obj.id) {
				return obj
			}
			return item
		})
		setContacts(newContact)
		setShowEditModal(false)
	}

	// edit
	return (
		<div>
			<AddContact addContact={addContact} />
			<ContactList
				contacts={contacts}
				deleteUser={deleteUser}
				handleEdit={handleEdit}
				handleSave={handleSave}
				editContact={editContact}
				showEditModal={showEditModal}
				handleEditClose={handleEditClose}
			/>
		</div>
	)
}

export default App
