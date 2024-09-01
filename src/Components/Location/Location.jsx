import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div id='location' className='location'>
      <h1>Location</h1>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31898.000234693415!2d36.42282851152827!3d-0.7190495412658545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f75966d0ba5e5%3A0x91a2a25c4c4f9830!2sKaragita%20Rubiri%20Secondary%20School!5e0!3m2!1sen!2ske!4v1692792332875!5m2!1sen!2ske"
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default Location