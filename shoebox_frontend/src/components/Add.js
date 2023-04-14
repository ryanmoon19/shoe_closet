import React, {useState, useEffect} from 'react'


const Add = (props) => {
    let emptyShoe = {name: '', description: '', price: '', image: ''}
    const [shoe, setShoe] = useState(emptyShoe)

    const handleChange = (e) => {
        setShoe({...shoe, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(shoe)
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