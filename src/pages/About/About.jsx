import React, { useEffect } from 'react'
import './about.scss'
import Aboutme from '../../component/aboutme/Aboutme'


const About = () => {
  useEffect(()=>{
    window.scrollTo({
     top:800,
     behavior:'smooth'
     
    })
  },[])


  return (
    <div>
      <Aboutme/>

    </div>
  )
}

export default About