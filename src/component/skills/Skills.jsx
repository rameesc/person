import React, { useEffect, useRef, useState } from 'react'
import './skills.scss'
import { skills } from '../../config/data'

const Skills = () => {
    const [visble,setVisble]=useState(false)
    const elementRefskill=useRef(null)
    useEffect(()=>{

        const observer=new IntersectionObserver((enties)=>{
            enties.forEach((entry)=>{
                if(entry.isIntersecting){
                    setVisble(true)
                }
            })

        },{
            threshold:0
        })
        if(elementRefskill.current){
            observer.observe(elementRefskill.current)
        }

        return ()=>{
            if(elementRefskill.current){
                observer.unobserve(elementRefskill.current)
            }

        }

    },[elementRefskill])
    //alert(visble)
  return (
    <div className='skills-container'>
        <div className='skill'>
            <div  className={`heading`}>
                <h1  >My skills</h1>
            </div>
            <div  className='skills'>
                {skills.map((item,index)=>{
                    return(
                        <div  className={`items`}>
                            <div   className={`imgs`}>
                                <img    src={item.img} alt={item.name} />
                                <div className='explain'>
                                 <h1>{item.name}</h1>
                                 <p>{item.discription}</p>
                                </div>
                               
                            </div>
                           
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
  )
}

export default Skills