import React, {useState, useEffect} from 'react'


const Edit = (props) => {
    
    const [shoe, setShoe] = useState({...props.shoe})

    const handleChange = (e) => {
        setShoe({...shoe, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        props.handleUpdate(shoe)
    };

    return (
        <>
            <details>
                <summary>Edit Shoe</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={shoe.name}
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor="description">Description: </label>
                    <input 
                        type="text"
                        name="description"
                        value={shoe.description}
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor="price">Price: </label>
                    <input 
                        type="number"
                        name="price"
                        value={shoe.price}
                        onChange={handleChange}
                    />
                    <br/>
                    <label htmlFor="image">Image: </label>
                    <input 
                        type="text"
                        name="name"
                        value={shoe.image}
                        onChange={handleChange}
                    />
                    <br/>
                    <input type="submit" />
                </form>
            </details>
        </>
    )
}

export default Edit