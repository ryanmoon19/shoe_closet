// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import Display from './components/Display'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'


// import './App.css';
const App = () => {
  return(
    <div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/display' element={<Display />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
  
}

export default App;
