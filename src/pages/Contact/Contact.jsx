import React, { useEffect, useState } from 'react'
import './contect.scss'
import { IoPhonePortraitOutline } from "react-icons/io5"
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs  from '@emailjs/browser'
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const [date,setDate]=useState({message:'',name:'',email:'',subject:''})
  const {message,email,name,subject}=date

  useEffect(()=>{
    window.scrollTo({
      top:400,
      behavior:"smooth"
    })

  },[])


  //emailjs 
  const YOUR_SERVICE_ID='service_7thmljo';
  const YOUR_TEMPLATE_ID='template_t0p2bcb'
  const publicKey='1gtyYQuSOI713vc6F'


  //sendEmail()
  const sendEmail=()=>{
    let templateParams = {
      
      user_name: name,
      user_email:email,
      
      message:message
    };
    if(!message||!email||!subject){
    return  alert('please fill your input')
    }
    emailjs.send(YOUR_SERVICE_ID,YOUR_TEMPLATE_ID,templateParams,publicKey).then((res)=>{
      console.log(res)
    }).catch((err)=>console.log(err))

  }

  //inputHandler(e)
  const inputHandler=(e)=>{
    const {name,value}=e.target;
    setDate({...date,[name]:value})

  }
  return (
    <div className='contant-container'>
      <div className='contact'>
        <div className='left'>
          <h1>Get in Touch</h1>
          <div className='inputs-item'>
            <textarea rows={30} cols={10} name='message' placeholder='Message' value={message} onChange={(e)=>inputHandler(e)}></textarea>

          </div>
          <div className='inputs-name-email'>
           <input type="text" placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>inputHandler(e)}/>
           <input type="text" placeholder='Enter Email Address' name='email' value={email} onChange={(e)=>inputHandler(e)}/>
           <input type="text" placeholder='Enter Subject' name='subject' value={subject} onChange={(e)=>inputHandler(e)}/>

          </div>
          <div className='btn'>
            <button onClick={()=>sendEmail()}>Send Message</button>
          </div>
          
        </div>
        <div className='right'>
          <div className='contact-items'>
            <div className='icons'>
              <IoPhonePortraitOutline/>

            </div>
            <h2>+91 8137911612</h2>
          </div>
          <div className='contact-items'>
            <div className='icons'>
              <MdEmail/>

            </div>
            <h2>rameescc7@gmail.com</h2>
          </div>
          <div className='contact-items'>
            <div className='icons'>
            <a href="http://www.instagram.com/mallu_skaterr/"><IoLogoInstagram /></a>

            </div>
            <h2><a href="http://www.instagram.com/mallu_skaterr/">Instagram</a></h2>
          </div>
          <div className='contact-items'>
            <div className='icons'>
            <a href="http://wa.me/918137911612" target="_blank"><FaWhatsapp/></a>

            </div>
            <h2><a href="http://wa.me/918137911612" target="_blank">Whatsapp</a></h2>
          </div>
          <div className='contact-items'>
            <div className='icons'>
            <a href="http://github.com/rameesc" target="_blank"><FaGithub/></a>

            </div>
            <h2><a href="http://github.com/rameesc" target="_blank">Github</a></h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact