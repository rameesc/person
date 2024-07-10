import React, { useEffect, useRef, useState } from 'react'
import './serviceProvided.scss'
import { services } from '../../config/data'

const ServiceProvided = () => {

  const [visble,setVisble]=useState(false)
  const elementRef=useRef(null)
  useEffect(()=>{
    const observe=new IntersectionObserver((enties)=>{
      enties.forEach((entry)=>{
        if(entry.isIntersecting){
          setVisble(true)
        }
      })
    },{
      threshold:0
    })

    if(elementRef.current){
      observe.observe(elementRef.current)
    }


    return()=>{
      if(elementRef.current){
        observe.unobserve(elementRef.current)
      }
    }

  },[elementRef])

 console.log(visble)
  return (
    <div className='serviceprovidrd-container'>
        <div className='serviceProvided'>
            <div className='heading'>
             <span>SERVICE PROVIDED</span>
             <h1  ref={elementRef} className={`textin ${visble?'textup':''}`}>what you get from me ?</h1>
            </div>
            <div ref={elementRef} className={`my-services fed-in ${visble?'fed-up':''}`}>
              {services.map((item,index)=>{
                return(
                  <div  className={`items`}>
                    <img src={item.img} alt={item.activity} />
                    <h1>{item.activity}</h1>
                    <p>{item.discription}</p>
                  </div>

                )
              })}
                
            </div>
           
        </div>
    </div>
  )
}

export default ServiceProvided