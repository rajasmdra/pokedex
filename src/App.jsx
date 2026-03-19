import React, { useState } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Pokedex from './Pokedex'
import Search from './Search'
import Pokemon from './Pokemon'

const NavigationBar = () => {
  return (
    <nav className='flex justify-evenly p-3 bg-orange-600 sticky top-0 z-1000'>
      <Link to ='/' className='text-yellow-200 font-bold hover:text-black'>Home</Link>
      <Link to ='/pokedex' className='text-yellow-200 font-bold hover:text-black'>Pokedex</Link>
      <Link to ='/search' className='text-yellow-200 font-bold hover:text-black'>Search</Link>
    </nav>
  )
}

const App = () => {
  return (
    <div className="bg-yellow-200 min-h-screen text-center flex flex-col">
      <HashRouter>
        <NavigationBar />
        <div className="w-[90%] mx-auto flex flex-col flex-1 justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/search" element={<Search />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
};

export default App
