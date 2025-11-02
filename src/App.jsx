import React from 'react'
import Navbar from './componant/Navbar'
import Footer from './componant/Footer'
import { Route, Routes } from 'react-router-dom'
import Hero from './componant/Hero'
import Contact from './componant/Contact'
import About from './componant/About'
import Portfolio from './componant/Portfolio'
import './Style/Style.css'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} ></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Portfolio' element={<Portfolio/>}></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
