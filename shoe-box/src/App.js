import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

// import Home from './components/Home'

const App = () => {
	const [newName, setNewName] = useState('');
	const [newDescription, setNewDescription] = useState('')
	const [shoes, setShoes] = useState([]);

	const handleNewName = (e) => {
		setNewName(e.target.value);
	};

	const handleNewDescription = (e) => {
		setNewDescription(e.target.value)
	};

	const handleNewShoeFormSubmit = (e) => {
		e.preventDefault();
		axios
		.post('http://localhost:3000/shoes',
			{
			name: newName,
			description: newDescription 
			}
		)
	};

	const handleDelete = (shoeData) => {
		axios
			.delete(`http://localhost:3000/shoes/${shoeData._id}`)
			.then((res) => {
				setShoes(res.data)
			})
	}

	const handleUpdate = (shoeData) => {
		axios
			.put(`http://localhost:3000/shoes/${shoeData._id}`, 
			{
				name: shoeData.name,
				description: shoeData.description
			}
			).then((res) => {
				setShoes(res.data)
			})

	}	

	useEffect(() => {
		axios
			.get('http://localhost:3000/shoes')
			.then((res) => {
				setShoes(res.data)
			})
	})

	return (
		<main>
		<h1>ShoeBox</h1>
		<section>
			<h3>Create a Shoe Post</h3>
			<form onSubmit={handleNewShoeFormSubmit}>
			Name: <input type='text' onChange={handleNewName}/><br/>
			Description: <input type='text' onChange={handleNewDescription}/><br/>
			<input type='submit' value='submit'/>
			</form>
		</section>
		<section>
			<h3>Shoes</h3>
			<ul >
				{shoes.map(shoe => {
					return (
						<li onClick={(e)=>{handleUpdate(shoe)}} key={shoe._id}>
							<h5>{shoe.name}</h5>
							<h6>{shoe.description}</h6>
							<button onClick={(e)=>{handleDelete(shoe)}}>Delete</button>
						</li>
					)
				})
				}
			</ul>
		</section>
		</main>
	)
}
export default App;
