import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { assets } from '../../../Data'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-info">
        <div className="footer-container">
          <h1>Working Hours</h1>
          <div className="footer-items">
            <p>Mon-Sat : <span>7:00am - 7:00pm</span></p>
            <p>Sunday : <span>7:00am - 12:00pm</span></p>
          </div>
        </div>
        <div className="footer-container">
          <h1>Head-Quarters</h1>
          <div className="footer-items">
            <p>Location : <span>Naivasha, Karagita (Rubiri)</span></p>
            <p>Email : <a href="mailto:bndungu69@gmail.com">bndungu69@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-container">
          <h1>Links</h1>
          <div className="footer-items">
            <Link className='footer-link link' to={`/`}>Home</Link>
            <Link className='footer-link link' to={`/about`}>About</Link>
            <Link className='footer-link link' to={`/products`}>Products</Link>
            <Link className='footer-link link' to={`/contact`}>Contact</Link>
          </div>
        </div>
        <div className="footer-container">
          <h1>Follows us On</h1>
          <div className="footer-items socials">
            <a href="#" className="social-link"><img src={assets.facebookW} alt="" /></a>
            <a href="#" className="social-link"><img src={assets.linkedinW}alt="" /></a>
            <a href="#" className="social-link"><img src={assets.instagramW} alt="" /></a>
            <a href="#" className="social-link"><img src={assets.twitterW} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <p>
          BN GLASS AND HARDWARE &copy; 2024. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer