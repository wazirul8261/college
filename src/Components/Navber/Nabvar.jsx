import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/col.png'
import { Link } from 'react-scroll'
import meno_icon from '../../assets/menu-icon.png'

const Nabvar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
   <nav className='container'>
     <img src={logo} alt="" className='logo' />
    <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'> Contact us</Link></li>
  
    </ul>
    <img src={meno_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Nabvar
