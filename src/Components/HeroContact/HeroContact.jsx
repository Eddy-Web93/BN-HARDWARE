import React from 'react'
import './HeroContact.css'
import { assets } from '../../../Data'

const HeroContact = () => {
  return (
    <div className='hero-contact' style={{
        background : ` url(${assets.building})`,
        backgroundAttachment : 'fixed',
        backgroundSize : 'cover',
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat"
    }}>
        <div className="contact-container">
            <div className="contact-section">
                <h1>Contact us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa similique eos porro, totam sequi consectetur?
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroContact