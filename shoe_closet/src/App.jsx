import React from 'React';
import axios from 'axios';
import { useState } from 'React';
import { useEffect } from 'react';

function App() {
  const [newDescription, setNewDescription] = useState('');
  const [newAvailability, setNewAvailability] = useState(false);
  const [newName, setNewName] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newPrice, setNewPrice] = useState(0)

  const [shoes, setShoes] = useState([]);

  const handleNewNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNewDescriptionChange = (e) => {
    setNewDescription(e.target.value)
  }

  const handleNewAvailabilityChange = (e) => {
    setNewAvailability(e.target.value)
  }

  const handleNewPriceChange = (e) => {
    setNewPrice(e.target.value)
  }

  const handleNewImageChange = (e) => {
    setNewImage(e.target.value)
  }

  const handleNewShoeFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/shoes', 
    {
      name: newName,
      description: newDescription,
      price: newPrice,
      image: newImage,
      availability: newAvailability
    }).then(() => {
      axios.get('http://localhost:3000/shoes').then((res) => {
        setShoes(res.data)
      })
    })
  }

  // DELETE
  const handleDelete = (shoeData) => {
    axios
      .delete(`http://localhost:3000/shoes/${shoeData._id}`)
      .then(() => {
        axios
          .get('http://localhost:3000/shoes')
          .then((res) => {
            setShoes(res.data)
          })
      })
  }

  // UPDATE
  const handleUpdate = (shoeData) => {
    axios
      .put(`http://localhost:3000/shoes/${shoeData._id}`,
      {
        name: shoeData.name,
      description: shoeData.description,
      price: shoeData.price,
      image: shoeData.image,
      availability: shoeData.availability
      }).then(() => {
        axios
          .get('http://localhost:3000/shoes')
          .then((res) => {
            setShoes(res.data)
          })
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
    <div className="App">
      <h1>Shoe Closet</h1>
      <ul>
        {shoes.map((shoe) => {
          return (
            <li>
              {shoe.name}
              <button onClick = {(e) =>{handleDelete(shoe)}}>Delete</button>
            </li>
          )
        })}
      </ul>
      <section>
        <h2>Create a New Shoe Post</h2>
        <form onSubmit={handleNewShoeFormSubmit}>
          Name: <input type='text' onChange={handleNewNameChange}></input>
          Description: <input type='text' onChange={handleNewDescriptionChange}></input>
          Price: <input type='number' onChange={handleNewPriceChange}></input>
          Image: <input type='text' onChange={handleNewImageChange}></input>
          Availability: <input type='checkbox' onChange={handleNewAvailabilityChange}></input>
          <input type='submit' onChange={handleUpdate}></input>
        </form>
      </section>
    </div>
  );
}

export default App;
