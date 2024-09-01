import React from 'react'
import './Class.css'
import { assets } from '../../../Data'

const Class = () => {
  return (
    <div className='class'>
        {/* img class section */}
        <div className='class-right'>
            <img className="class-img" src={assets.frontRight} alt="" />
            <div>
                <p className='img-bg'></p>
            </div>
        </div>
        {/* img class text section */}
        <div className="class-left">
            <h4>BN Hardware store</h4>
            <p>
                We provide quality, quantity and perspecacity
            </p>
            <div className="class-container">
                <div className="gala">
                    <img src={assets.frontLeft} alt="" className="gala-img" />
                    <p className="gala-bg"></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Class