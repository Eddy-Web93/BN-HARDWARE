import React from 'react'
import './Home.css'
import Hero from '../../Components/Hero/Hero'
import BestSeller from '../../Components/Best-seller/BestSeller'
import Card from '../../Components/Display/Card/Card'
import Class from '../../Components/Class/Class'
import FAQs from '../../Components/FAQs/FAQs'
import EmailSub from '../../Components/EmailSubs/EmailSub'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <BestSeller/>
      <Class/>
      <FAQs/>
      <EmailSub/>
    </div>
  )
}

export default Home