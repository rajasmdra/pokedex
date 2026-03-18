import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Pokedex from './Pokedex'

const NavigationBar = () => {
  return (
    <nav className='flex justify-center gap-3 p-3 bg-orange-600 sticky top-0 z-1000'>
      <Link to ='/' className='text-yellow-200 font-bold mx-1 hover:text-black'>Home</Link>
      <Link to ='/pokedex' className='text-yellow-200 font-bold mx-1 hover:text-black'>Pokedex</Link>
    </nav>
  )
}

const App = () => {
  return (
    <div className='bg-yellow-200 text-center m-0'>
      <BrowserRouter>
        <NavigationBar />
        <Routes className='w-[90%] max-w-[640px] mx-auto'>
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
