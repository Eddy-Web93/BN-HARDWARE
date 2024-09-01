import React from 'react'
import HeroContact from '../../Components/HeroContact/HeroContact'
import Location from '../../Components/Location/Location'
import Connect from '../../Components/Connect/Connect'

const Contact = () => {
  return (
    <div className='contact'>
      <HeroContact/>
      <Location/>
      <Connect/>
    </div>
  )
}

export default Contact