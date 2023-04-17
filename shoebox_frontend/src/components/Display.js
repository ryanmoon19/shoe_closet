import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Add from './Add'
import Edit from './Edit'


const Display = () => {
    let [shoes, setShoes] = useState([])
    const [search, setSearch]= useState("")
    const [searchField, setSearchField] = useState("")
    const [checkSearch, setcheckSearch] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    
    const handleCreate = (addShoe) => {
        axios 
        .post('https://shoebox-backend.onrender.com/shoes', addShoe)
        .then((res) => {
            console.log(res)
            getShoes()
        })
    };

    // const handleDelete = (e) => {
    //     axios
    //     .delete(`https://shoebox-backend.onrender.com/shoes/${e.target.value}`)
    //     .then((res) => {
    //         getShoes();
    //     })
    // }
    const handleChange = (event) => {
        setSearchField(event.target.value)
    }
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearch(searchField)
            setcheckSearch(true)
        }
    }

    const handleUpdate = (editShoe) => {
        axios
        .put(`https://shoebox-backend.onrender.com/shoes/${editShoe.id}`, editShoe)
        .then((res) => {
            getShoes()
        })
    }

    const getShoes = () => {
        axios
        .get('https://shoebox-backend.onrender.com/shoes')
        .then(
            (res) => setShoes(res.data),
            (err) => console.log(err)
        )
        .catch((err) => console.error(err))
    };

    useEffect(() => {
        getShoes()
    }, [])


    return (
        <>
            <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">SHOEBOX</h1>
            
            <div className='text-center'>
                <button type='button' className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <Link to={'/add'}>Add</Link>
                </button>
            </div>
            <div className= "flex flex-col items-center justify-center w-screen h-40">
                <input className="my-0 text-black border border-gray-400 rounded-md w-96 px-4 py-3 mt-4"type="text" placeholder="search" onChange={handleChange} onKeyDown={handleKeyDown}/>
            </div>
            <div>
                <h3></h3>
                {checkSearch ? <p className="text-[15px] text-center">Search results: {search}</p> : <></>}
            </div>
            <div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {shoes.map((shoe) => {
                return (
                    <div className='grid gap-4' key={shoe.id}> 
                        <div>
                            {/* <h4>Name: {shoe.name}</h4>
                            <h5>Description: {shoe.description}</h5>
                            <h5>Price: {shoe.price}</h5> */}
                        </div>
                        <div>
                            <Link to={`/oneshoe/${shoe.id}`}>
                                <img className='h-auto max-w-full rounded-lg' src={shoe.image} ></img>
                            </Link>
                            <div id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className='relative w-full max-w-2xl max-h-full'>
                                    <div className='relative rounded-lg shadow'>
                                        <div>
                                            <img src={shoe.image} />
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Edit handleUpdate={handleUpdate} shoe={shoe}/>
                        {/* <button onClick={handleDelete} value={shoe.id}>X</button> */}
                    </div>
                )
                })}
                <Add handleCreate={handleCreate}/>
                </div>
        </>
    );
}

export default Display
