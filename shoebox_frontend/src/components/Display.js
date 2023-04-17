import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Add from './Add'
import Edit from './Edit'


const Display = () => {
    let [shoes, setShoes] = useState([])

    // const handleCreate = (addShoe) => {
    //     axios 
    //     .post('https://shoebox-backend.onrender.com/shoes', addShoe)
    //     .then((res) => {
    //         console.log(res)
    //         getShoes()
    //     })
    // };

    const handleDelete = (e) => {
        axios
        .delete(`https://shoebox-backend.onrender.com/shoes/${e.target.value}`)
        .then((res) => {
            getShoes();
        })
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
            <h1>SHOEBOX</h1>
            {/* <Add handleCreate={handleCreate}/> */}
            <Link to={'/add'}>Add</Link>
            <ResponsiveMasonry 
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                {shoes.map((shoe) => {
                return (
                    <div key={shoe.id}> 
                        <h4>Name: {shoe.name}</h4>
                        <h5>Description: {shoe.description}</h5>
                        <h5>Price: {shoe.price}</h5>
                        <img style={{width: "100%", height:"240px", display: "block"}}src={shoe.image}></img>
                        <Edit handleUpdate={handleUpdate} shoe={shoe}/>
                        <button onClick={handleDelete} value={shoe.id}>X</button>
                    </div>
                )
                })}
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
}

export default Display
