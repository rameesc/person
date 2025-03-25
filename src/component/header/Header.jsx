import React, { useEffect, useState } from 'react'
import './header.scss'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { LuMenuSquare } from "react-icons/lu";
import Hero from '../hero/Hero';



const Header = () => {

 

  const [headershow,setHeaderShow]=useState(false)
  const [menushow,SetmenuShow]=useState(true)

const scrollHandler=()=>{
  if(window.scrollY>500){
   return setHeaderShow(true)

  }
  setHeaderShow(false)
}
  useEffect(()=>{
    window.addEventListener("scroll",scrollHandler)
  

  },[headershow])

  
  const mediaQuery=window.matchMedia(`(max-width:890px)`)
  mediaqueryHandler
  const mediaqueryHandler=(event)=>{
    
   if(event.matches){
   return SetmenuShow(false)

   }
   SetmenuShow(true)

  }

  useEffect(()=>{
    mediaQuery.addListener(mediaqueryHandler)

  },[])
  
  return (
    <div className='hearder-container'>
        <div style={{position:headershow?"fixed":'absolute',background:headershow&&'black'}} className='header'>
          <Link to='/'>  <h1 className='heading'>Ramees</h1></Link>
          {menushow&&  <ul className={`viewAll` }>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/service'>Service</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <h1 className='close' onClick={()=>SetmenuShow(false)}>X</h1>
            </ul>}
            <div className='menu-moble-view' onClick={()=>SetmenuShow(!menushow)}>
                <LuMenuSquare/>

            </div>
        </div>
        <Hero/>
        <Outlet/>
    </div>
  )
}

export default Header