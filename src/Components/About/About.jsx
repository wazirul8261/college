import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
   <div className="about">
    <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
    </div>
    <div className="about-right">
    <h3>ABOUT COLLEGE</h3>
    <h2>Nurturing Tomorrow's Leaders Today</h2>
    <p>Our college is a vibrant hub of learning and innovation, where students from diverse backgrounds come together to pursue their academic goals. With a strong emphasis on both theoretical knowledge and practical application, our faculty members are dedicated to providing a stimulating and supportive learning environment. The college boasts state-of-the-art facilities, including well-equipped laboratories, a spacious library, and modern classrooms.</p>
    <p>Education is the cornerstone of personal and societal growth. It empowers individuals with knowledge, skills, and critical thinking abilities, enabling them to navigate the complexities of 1  the world. Through formal and informal learning experiences, education fosters creativity, innovation, and a lifelong love of learning. It equips individuals with the tools to contribute meaningfully to their communities and shape a better future.</p>
    <p>Our college administration is committed to fostering a vibrant and inclusive learning environment. They work tirelessly to create a supportive atmosphere where students can thrive academically and personally. The administration is dedicated to providing resources, opportunities, and guidance to ensure the success of every student. From academic advising to extracurricular activities, the administration plays a vital role in shaping the overall college experience.</p>
    </div>
   </div>
  )
}

export default About
