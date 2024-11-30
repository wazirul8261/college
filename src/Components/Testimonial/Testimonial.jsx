import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {
    const slider =useRef ();
    let tx = 0;
const slideForward = () => {
if(tx > -50){
    tx -= 25;
}
    slider.current.style.transform = "translateX(${tx}%)";
}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
        slider.current.style.transform = 'translateX(${tx}%)'; 
}

  return (
   <div className="testimonial">
    <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
    <img src={back_icon } alt="" className='back-btn' onClick={slideBackward}/>
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                    <div>
                    <h3>Tania Naznin 1</h3>
                    <span>Govt College, Panchagarh</span>
                </div>
                </div>
                <p>Choosing to pursue my degree at Govt College Panchagarh was the best decision</p>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                    <div>
                    <h3>Zahidul Haque 2</h3>
                    <span>Govt College, Panchagarh</span>
                </div>
                </div>
                <p> Govt College Panchagarh consistently demonstrates a commitment to academic excellence, with highly qualified faculty who inspire students to reach their full potential</p>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                    <div>
                    <h3>Mehrin Afroz 3</h3>
                    <span>Govt College, Panchagarh</span>
                </div>
                </div>
                <p> Govt College Panchagarh boasts a diverse student body, creating a vibrant and enriching learning experience for all</p>
                </div>
            </li>
            
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                    <div>
                    <h3>Sabbir Hasan 4</h3>
                    <span>Govt College, Panchagarh</span>
                </div>
                </div>
                <p>Govt College Panchagarh is situated on a beautiful campus, providing a serene and inspiring setting for learning and growth.</p>
                </div>
            </li>
        </ul>
    </div>
   </div>
  )
}

export default Testimonial
