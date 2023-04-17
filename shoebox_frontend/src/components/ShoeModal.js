// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// function ShoeModal({open}) {
//     if(!open) return null;

//     // const [shoe, setShoe] = useState({})

//     // const handleDelete = (e) => {
//     //     axios
//     //     .delete(`https://shoebox-backend.onrender.com/shoes/${e.target.value}`)
//     //     .then((res) => {
//     //         getShoes();
//     //     })
//     // }

//     useEffect(() => {
//         axios
//         .get(`https://shoebox-backend.onrender.com/shoes/${id}`)
//         .then((res) => {
//             setShoe(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//     }, [id])

//     return (
//         <>
//             <div>
//                 <div>
//                     <img src={shoe.image} />
//                 </div>
//                 <div>
//                     <p>
//                         <Link to={`/edit/${shoe.id}`}>Edit</Link>
//                         <br/>
                        
//                     </p>
//                 </div>
//                 <div>
//                     <h4>Name: {shoe.name}</h4> <br/>
//                     <h5>Description: {shoe.description}</h5> <br/>
//                     <h5>Price: {shoe.price}</h5> 
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ShoeModal
