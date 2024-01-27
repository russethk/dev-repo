import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram } from 'react-icons/fa';

/** Renders a Contact form.
 * 
 * -Form will not be submitted if required fields are not filled out.
 * 
*/

const Contact = () => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		message: ''
	});

	const { name, email, message } = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<section className="ContactForm">
			<h2 className="h2">Contact Us</h2>
			<form className="Form" onSubmit={handleSubmit}>
				<div>
					<label className="NameInput" htmlFor="name">
						Name:
					</label>
					<input type="text" id="name" name="name" value={name} onChange={handleChange} required />
				</div>
				<div>
					<label className="EmailInput" htmlFor="email">
						Email:
					</label>
					<input type="email" id="email" name="email" value={email} onChange={handleChange} required />
				</div>
				<div>
					<label className="MessageInput" htmlFor="message">
						Message:
					</label>
					<textarea id="message" name="message" value={message} onChange={handleChange} required />
				</div>
				<button type="submit">Send </button>

				<div className="PhoneNumber">
					<a href="tel:5551234567">Call us at 555-123-4567</a>
				</div>
				<div className="EmailAddress">
					<a href="mailto:snackorbooze@info.com">Email us at snackorbooze@info.com</a>
				</div>
				<a href="https://www.instagram.com/gordongram/?hl=en" target="_blank" rel="noopener noreferrer">
					<div style={{ textAlign: 'center' }}>
						<FaInstagram size={30} color="#007bff" />
					</div>
				</a>
			</form>
		</section>
	);
};

export default Contact;