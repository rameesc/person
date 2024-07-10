import React, { useEffect, useRef, useState } from 'react'
import './aboutme.scss'
import me from '../../assets/imges/me.jpeg'
const Aboutme = () => {
    const [visble,setVisble]=useState(false)
    const elementMe=useRef(null)

    useEffect(()=>{
        const observer=new IntersectionObserver((enties)=>{
            enties.forEach((entry)=>{
                if(entry.isIntersecting){
                    setVisble(true)
                }
            })
        },{
            threshold:0.5
        })

        if(elementMe.current){
            observer.observe(elementMe.current)
        }

        return ()=>{
            if(elementMe.current){
                observer.unobserve(elementMe.current)
            }

        }

    },[elementMe])
  return (
    <div className='about-conatiner'>
        <div className='about'>
            <h1>About</h1>
            <div ref={elementMe} className={`about-in adout-me ${visble?'about-up':''}`}>
                <div className='left'>
                    <h2 className='about-me'>About me</h2>
                    <p>I am a passionate and skilled MERN stack developer with a strong background in building dynamic and responsive web applications. With expertise in MongoDB, Express.js, React, and Node.js, I have successfully delivered numerous projects from concept to deployment. My problem-solving abilities, attention to detail, and commitment to writing clean, maintainable code enable me to contribute effectively to any development team. I thrive in collaborative environments and am always eager to learn new technologies and best practices to enhance my skills and deliver high-quality software solutions.</p>
                </div>
                <div className='right'>
                    <div className='my'>
                     <img src={me} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutme