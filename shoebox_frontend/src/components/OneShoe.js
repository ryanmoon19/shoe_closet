import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Edit from './Edit'

function Oneshoe() {
    const [shoe, setShoe] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const handleDelete = (e) => {
        axios
        .delete(`https://shoebox-backend.onrender.com/shoes/${e.target.value}`)
        .then((res) => {
            console.log(res)
            navigate('/display')
        })
    }

    const handleUpdate = (editShoe) => {
        axios
        .put(`https://shoebox-backend.onrender.com/shoes/${editShoe.id}`, editShoe)
        .then((res) => {
            navigate('/display')
        })
    }

    useEffect(() => {
        axios 
        .get(`https://shoebox-backend.onrender.com/shoes/${id}`)
        .then((res) => {
            setShoe(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    return (
        <>
            <div className='flex ml-6 mt-10'>
                <div>
                    <img className='h-auto max-w-s rounded-lg' src={shoe.image} />
                </div>
                <div>
                    <h4 className="ml-10 mr-6 text-4xl font-extrabold dark:text-white">Name: {shoe.name}</h4> 
                    <br/>
                    <h5 class="ml-10 mr-6 mb-4 text-xl font-normal text-gray-500 dark:text-gray-400" >Description: {shoe.description}</h5>
                    <br/>
                    <h5 class="ml-10 mr-6 mb-4 text-xl font-normal text-gray-500 dark:text-gray-400" >Price: {shoe.price}</h5>
                    <button className="ml-10 mr-6 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <Link to={'/display'}>Go Back</Link>
                    </button>
                    <div className='ml-10 mr-6'>
                        <Edit handleUpdate={handleUpdate} shoe={shoe}/>
                    </div>
                    <button className="ml-10 mr-6 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleDelete} value={shoe.id}>Delete</button>
                </div>
            </div>
            
        </>
    )
    }

export default Oneshoe
