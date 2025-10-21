import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

import Nosotras from './Pages/Nosotras'
import Footer from './Components/Footer'
import Informacion from './Pages/Informacion'
import Contactos from './Pages/Contactos'
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
        path='/Informacion'
        element={<Informacion/>}
      z/>
      <Route 
        path='/Nosotras'
        element={<Nosotras/>}
      z/>
    
      <Route 
        path='/Contacto'
        element={<Contactos/>}
      z/>
       
      </Routes>
         <Footer/>

    </BrowserRouter>
   

    </>
  )
}

export default App
