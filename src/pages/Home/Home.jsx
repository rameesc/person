import React from 'react'
import './home.scss'
import Hero from '../../component/hero/Hero'
import ServiceProvided from '../../component/servies/ServiceProvided'
import Skills from '../../component/skills/Skills'
import Aboutme from '../../component/aboutme/Aboutme'
import Slider from '../../component/slider/Slider'
import Footer from '../../component/footer/Footer'

const Home = () => {
  window.scrollTo({
    top:0,
     behavior:"smooth"
   },[])
  return (
    <div className='home-conatiner'>
      <div className='container'>
      
        <ServiceProvided/>
        <Skills/>
        <Aboutme/>
        <Slider/>
       
       
        

      </div>
     
    
    </div>
  )
}

export default Home