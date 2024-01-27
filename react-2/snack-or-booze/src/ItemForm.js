import React, { useState } from 'react';
import './ItemForm.css';
import axios from 'axios';

/** Renders an Item Form.
 * 
 * -Allows user to add a snack or drink item.
 * 	-Select input for choosing a snack or drink
 * 	-formData includes name: '', description: '', recipe: '', serve: ''
 * 
 * - It adds snack items to the snack list and drink items to the drink list.
 * - It sends form data to a server using an HTTP POST request and updates the UI.

 * - Error handling for the handleSubmit function.
 * -Form will not be submitted if required fields are not filled out.
 * 
 */

const BASE_API_URL = 'http://localhost:5000';

const addDrinkUrl = () => `${BASE_API_URL}/drinks`;
const addSnackUrl = () => `${BASE_API_URL}/snacks`;

function ItemForm() {
	const [ formData, setFormData ] = useState({ item: 'snack', name: '', description: '', recipe: '', serve: '' });
	const [ isSuccess, setIsSuccess ] = useState(false);
	const { item, name, description, recipe, serve } = formData;

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};


	const handleSubmit = async (evt) => {
		try {
			evt.preventDefault();
			if (name === '' || description === '' || recipe === '' || serve === '') {
				alert('You missed some required info. Please try again.');
				return;
			}
			const data = { name, description, recipe, serve };
			// if `item` is equal to `drink`, addDrinkUrl is called to get the URL, otherwise, the addSnackUrl is called
			const url = item === 'drink' ? addDrinkUrl() : addSnackUrl();
			await axios.post(url, data);
			setIsSuccess(true);
			// clear form data after submission
			setFormData({ item: 'snack', name: '', description: '', recipe: '', serve: '' });
		} catch (error) {
			console.error(error);
			alert('An error occurred while adding the item. Please try again.');
		}
	}

	return (
		<div className="ItemForm">
			<h2 className="h2">Add Item</h2>
			{isSuccess && <p style={{ color: 'green' }}>Item successfully added!</p>}
			<form onSubmit={handleSubmit}>
				<label htmlFor="item">Item:</label>
				<select id="item" name="item" value={item} onChange={handleChange}>
					<option value="snack">Snack</option>
					<option value="drink">Drink</option>
				</select>
				<br />
				<label htmlFor="name">Name:</label>
				<input
					id="name"
					name="name"
					placeholder="Name"
					value={name}
					onChange={handleChange}
					required
				/>
				<label htmlFor="description">Description:</label>
				<input
					id="description"
					name="description"
					placeholder="Description"
					value={description}
					onChange={handleChange}
					required
				/>
				<label htmlFor="recipe">Recipe:</label>
				<input
					id="recipe"
					name="recipe"
					placeholder="Recipe"
					value={recipe}
					onChange={handleChange}
					required
				/>
				<label htmlFor="serve">Serve:</label>
				<input
					id="serve"
					name="serve"
					placeholder="Serving Instructions"
					value={serve}
					onChange={handleChange}
					required
				/>
				<button type="submit" style={{ marginRight: '10px' }}>
					Submit
				</button>
			</form>
		</div>
	);

}

export default ItemForm;