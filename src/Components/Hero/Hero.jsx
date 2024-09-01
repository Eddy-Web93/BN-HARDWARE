import React from 'react'
import './Hero.css'
import { assets } from '../../../Data'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero'
    style={{
      background : `url(${assets.front})`,
      backgroundPosition : "center",
      backgroundAttachment : "fixed",
      backgroundSize : "cover !important"
    }}>
      <div className="hero-container">
        <div className="hero-section">
            <h1>Build with us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem delectus veritatis tempore at recusandae quasi?
            </p>
            <button className="hero-btn btn">
              <Link className='hero-link' to={`/products`}>Find Products</Link>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Hero