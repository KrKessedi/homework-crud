import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ContactCard = ({ item, deleteUser, handleEdit }) => {
	return (
		<>
			<Card
				style={{
					width: '18rem',
					margin: '10px',
					display: 'flex',
					backgroundColor: 'pink',
				}}
			>
				<Card.Img variant='top' src={item.img} height='250' />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>Phone: {item.phone}</Card.Text>
					<Button variant='danger' onClick={() => deleteUser(item.id)}>
						Delete
					</Button>
					<Button
						variant='warning'
						className='mx-1'
						onClick={() => handleEdit(item.id)}
					>
						Update
					</Button>
				</Card.Body>
			</Card>
		</>
	)
}

export default ContactCard
