import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

// import './App.css';
const App = () => {
  let [shoes, setShoes] = useState([])

  const handleCreate = (addShoe) => {
    axios 
      .post('http://localhost:8000/shoes', addShoe)
      .then((res) => {
        console.log(res)
        getShoes()
      })
  };

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:8000/shoes/${e.target.value}`)
      .then((res) => {
        getShoes();
      })
  }

  const handleUpdate = (editShoe) => {
    axios
      .put(`http://localhost:8000/shoes/${editShoe.id}`, editShoe)
      .then((res) => {
        getShoes()
      })
  }

  const getShoes = () => {
    axios
      .get('http://localhost:8000/shoes')
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
      <Add handleCreate={handleCreate}/>
      <div >
        {shoes.map((shoe) => {
          return (
            <div className='flex flex-wrap' key={shoe.id}> 
              <h4>Name: {shoe.name}</h4>
              <h5>Description: {shoe.description}</h5>
              <h5>Price: {shoe.price}</h5>
              <img className='ml-auto mr-auto' style={{width: "330px", height:"240px"}}src={shoe.image}></img>
              <Edit handleUpdate={handleUpdate} shoe={shoe}/>
              <button onClick={handleDelete} value={shoe.id}>X</button>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
