import React from 'react'
import Nabvar from './Components/Navber/Nabvar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {

  
  return (
    <div>
      <Nabvar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Program/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What Student Says'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
  
    </div>
  )
}


export default App
