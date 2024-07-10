import React from 'react'
import './slider.scss'
import slider from '../../assets/imges/banner2.png'
import { IoIosQuote } from "react-icons/io";
const Slider = () => {
  return (
    <div className='slider-container'>
      <div className='slider'>
        <div className='quote'>
          <IoIosQuote/>
        </div>

        <h3>The best way to predict the future is to invent it." </h3>
      </div>
    </div>
  )
}

export default Slider