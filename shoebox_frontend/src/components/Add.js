import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
    let emptyShoe = {name: '', description: '', price: '', image: ''}
    const [shoe, setShoe] = useState(emptyShoe)
    const navigate = useNavigate([])

    const handleCreate = (addShoe) => {
        axios 
        .post('https://shoebox-backend.onrender.com/shoes', addShoe)
        .then((res) => {
            console.log(res)
        })
    };

    const handleChange = (e) => {
        setShoe({...shoe, [e.target.name]: e.target.value})
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        await handleCreate(shoe)
        navigate('/display')
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange}/>
                <br/>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" onChange={handleChange}/>
                <br/>
                <label htmlFor="price">Price: </label>
                <input type="number" name="price" onChange={handleChange}/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="text" name="image" onChange={handleChange}/>
                <br/>
                <input type="submit" /> 
            </form>
        </>
    )
}

export default Add