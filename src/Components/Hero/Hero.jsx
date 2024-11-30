import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return ( 
  <div className="hero ">
 <div className="heroOverlay">
<div className="hero-text container">
    <h1>We ensure better education for a better world</h1>
    <p>Our cutting-edge curriculum is designed to empower students with the knowledge, 
        skills and experiences needed to excel in the dynamic field of education </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
</div>

 </div>
  </div>
 
    )
}

export default Hero
