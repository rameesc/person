import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../component/header/Header'
import About from '../pages/About/About'
import Service from '../pages/service/Service'
import Contact from '../pages/Contact/Contact'
import Footer from '../component/footer/Footer'

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='contact' element={<Contact/>}/>
        
        </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routers