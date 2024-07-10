import React from 'react'
import './hero.scss'
import me from '../../assets/imges/me.jpeg'
//import firstBanner from '../../assets/IMG/banner.png'
import grid from '../../assets/imges/grid.png'

const Hero = () => {
  return (
    <div className='hero-container'>
    <div className='container'>
     <img src={me} alt="" />

     <div className='its-me'>
      <h1>Hello I am Ramees</h1>
      <div className='mern-stack'>
        <div className='line'></div>
        <h1 className='mern'>Mern Stack Developer</h1>
      </div>
      
     </div>
     <div className='grid'>
       <img  src={grid} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Hero