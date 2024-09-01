import React from 'react'
import './Connect.css';
import { assets } from '../../../Data'

const Connect = () => {
  return (
    <div className='connect'>
        <h1 className='connect-title'>Let's connect</h1>
        <div className="connect-container">
        {/* left section */}
            <div className="connect-left">
                <a href='tel:+254725759744' className="connect-details">
                    <div className="connect-img">
                        <img src={assets.phone} alt="" />
                    </div>
                    <div className="connect-text">
                        <h3>Phone</h3>
                        <p>+254725759744</p>
                    </div>
                </a>
                <a href='mailto:bndungu69@gmail.com' className="connect-details">
                    <div className="connect-img">
                        <img src={assets.mail} alt="" />
                    </div>
                    <div className="connect-text">
                        <h3>Email</h3>
                        <p>bndungu69@gmail.com</p>
                    </div>
                </a>
                <a href='#location' className="connect-details">
                    <div className="connect-img">
                        <img src={assets.location} alt="" />
                    </div>
                    <div className="connect-text">
                        <h3>Location</h3>
                        <p>Kenya, Nairobi (Nakuru, Naivasha)</p>
                    </div>
                </a>
            </div>
            <div className="connect-right">
                <form action="">
                    <input type="text" name="name" placeholder='NAME' id="name" required />
                    <input type="email" name='email' placeholder='EMAIL' id='email' required />
                    <input type="tel" name="phone-number" id="phone-number" placeholder='PHONE NUMBER' />
                    <textarea name="msg" id="msg"placeholder='Enter Your Message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Connect