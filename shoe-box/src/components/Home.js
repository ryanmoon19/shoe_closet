import React, {useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';

const Home = () => {
    const [shoes, setShoes] = useState([])
    const [updated, setUpdated] = useState(false)

    const {id} = useParams()


    const getShoes = () => {
        axios.get(`http://locahost:3000/shoes/all`)
            .then((res) => {
                console.log(res.data);
                setShoes(res.data)
            })
    }
    
    const getOneShoe = (id) => {
        return axios.get(`http://localhost:3000/shoes/${id}`)
            .then((res) => {
                return res.data
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getShoes()
    }, [])

    useEffect(() => {
        getShoes();
    }, [updated])

    return(
        <>
            <div>
                {shoes.map((shoe) => {
                    return (
                        <div>
                            <Link to={`/oneShoe/${shoe.id}`} onClick={()=>getOneShoe(shoe.id)}>
                                <img src={shoe.image}></img>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home