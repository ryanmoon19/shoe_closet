import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = (props) => {
    let emptyShoe = {name: '', description: '', price: '', image: ''}
    const [shoe, setShoe] = useState(emptyShoe)
    const navigate = useNavigate([])

    // const handleCreate = (addShoe) => {
    //     axios 
    //     .post('https://shoebox-backend.onrender.com/shoes', addShoe)
    //     .then((res) => {
    //         console.log(res)
    //         getShoes()
    //     })
    // };

    const handleChange = (e) => {
        setShoe({...shoe, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(shoe)
        navigate('/display')
    };

    return (
        <>
            <div >
                <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">ADD NEW SHOE</h1>
                <form className="bg-black py-8 px-6 shadow-lg rounded-lg sm:px-10" onSubmit={handleSubmit}>
                    <label className='block text-xl font-medium text-white-700' htmlFor="name">Name: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 text-black' type="text" name="name" onChange={handleChange}/>
                    <br/>
                    <label className='block text-xl font-medium text-white-700' htmlFor="price">Price: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 text-black' type="number" name="price" onChange={handleChange}/>
                    <br/>
                    <label className='block text-xl font-medium text-white-700' htmlFor="description">Description: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 text-black' type="text" name="description" onChange={handleChange}/>
                    <br/>
                    <label className='block text-xl font-medium text-white-700' htmlFor="image">Image: </label>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 text-black' type="text" name="image" onChange={handleChange}/>
                    <br/>
                    <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-300 text-white' type="submit" /> 
                </form>
            </div>
        </>
    )
}

export default Add