import React from 'react'
import './HeroAbout.css'
import { assets }from '../../../Data'

const HeroAbout = () => {
  return (
    <div className='hero-about' 
    style={{background :`url(${assets.welding})`,
    backgroundPosition : 'center', 
    backgroundAttachment : 'fixed'}}>
        <div className="ha-bg">
            <div className="ha-section">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat quam, delectus aliquid doloremque voluptas.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroAbout