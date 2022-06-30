import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './app.css'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Create from './components/Create'


function App() {
  return (
    <BrowserRouter>
        <Navbar />   
        
   
    <div className='app'>
        <Routes>
          <Route  path="/cart" element={<Cart/>}/>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="/create" element={<Create/>}/>
        </Routes>
    </div>
      </BrowserRouter>

  )
}

export default App