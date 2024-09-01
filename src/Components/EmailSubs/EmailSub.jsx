import React from 'react'
import './EmailSub.css'

const EmailSub = () => {
  return (
    <div className='email-sub'>
        <h1>
          <span>Subscribe to Our daily content</span>
        </h1>
        <p className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat, eligendi illum aliquid delectus labore deserunt!
        </p>
        <div className="input">
            <input type="email" placeholder='Enter your email' name="email-subs" id="email-sub" />
            <button className="email-btn"><p id='sub'>Subscribe</p></button>
        </div>
    </div>
  )
}

export default EmailSub