import React, { useEffect } from 'react'
import './service.scss'
import ServiceProvided from '../../component/servies/ServiceProvided'

const Service = () => {
  useEffect(()=>{
    window.scrollTo({
      top:900,
      behavior:"smooth"
    })

  },[])
  return (
    <div>
      <ServiceProvided/>
    </div>
  )
}

export default Service