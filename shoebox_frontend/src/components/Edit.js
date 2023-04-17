import React, {useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Edit = (props) => {
    const navigate = useNavigate()
    const [shoe, setShoe] = useState({...props.shoe})

    const handleChange = (e) => {
        setShoe({...shoe, [e.target.name]: e.target.value})
    }

    const handleUpdate = (editShoe) => {
        axios
        .put(`https://shoebox-backend.onrender.com/shoes/${editShoe.id}`, editShoe)
        .then((res) => {
            navigate('/display')
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        handleUpdate(shoe)
    };

    return (
        <>
            <details>
                <summary>Edit Shoe</summary>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Name: </label>
                    <input className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black'
                        type="text"
                        name="name"
                        value={shoe.name}
                        onChange={handleChange}
                    />
                    <br/> 
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="price">Price: </label>
                    <input className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black'
                        type="number"
                        name="price"
                        value={shoe.price}
                        onChange={handleChange}
                    />
                    <br/>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="description">Description: </label>
                    <input className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black'
                        type="text"
                        name="description"
                        value={shoe.description}
                        onChange={handleChange}
                    />
                    <br/>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Image: </label>
                    <input className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black'
                        type="text"
                        name="name"
                        value={shoe.image}
                        onChange={handleChange}
                    />
                    <br/>
                    <input className='mb-3 w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-300 text-white' type="submit" />
                </form>
            </details>
        </>
    )
}

export default Edit