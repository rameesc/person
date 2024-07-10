import React from 'react'
import './footer.scss'
import {Link} from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer">
            <div className='discuss-project'>
                <h1>Let’s discuss for a project</h1>
                <p>Discussing a future project involves considering various aspects such as goals, planning, execution, and evaluation. Here’s an outline on how to approach discussing a future project</p>
                <Link to='/contact'> <button>start Talking</button></Link>
            </div>
            <div className='menu'>
                <ul>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/service'>Service</Link>
                   
                </ul>
                <div className='icons'>
                    <div className='cercle'>
                        <a href="http://www.instagram.com/mallu_skaterr/">
                        <FaInstagram/>
                        </a>

                    </div>
                    <div className='cercle'>
                    <a href="http://wa.me/918137911612"> <FaWhatsapp/></a>

                    </div>
                    <div className='cercle'>
                    <a href="http://github.com/rameesc"> <FaGithub/></a>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer