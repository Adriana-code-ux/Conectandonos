import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Header from './Components/Header'
import Nosotras from './Pages/Nosotras'
import Footer from './Components/Footer'
function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>

            <Route 
        path='/'
        element={<Hero/>}
      z/>
        <Route 
        path='/Nosotras'
        element={<Nosotras/>}
      z/>
    
      </Routes>
         <Footer/>

    </BrowserRouter>
   

    </>
  )
}

export default App
