import React from 'react'
import HeroAbout from '../../Components/HeroAbout/HeroAbout'
import Services from '../../Components/Services/Services'
import Story from '../../Components/Story/Story'
import EmailSub from '../../Components/EmailSubs/EmailSub'

const About = () => {
  return (
    <div className='about'>
      <HeroAbout/>
      <Services/>
      <Story/>
      <EmailSub/>
    </div>
  )
}

export default About