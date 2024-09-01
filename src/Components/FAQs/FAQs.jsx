import React, { useState } from 'react'
import './FAQs.css'
import { assets } from '../../../Data'

const FAQs = () => {
    const [ shif , setShif ] = useState(0);
    const questions =[
        {
            key : 1,
            question : "Do you offer free delivery services ?",
            answer : "Yes we do offer but depending on the size of the purchase"
        },
        {
            key : 2,
            question : "Do you take contracts?",
            answer : "Yes we advice people to get into contract with us so as to discounts"
        },
        {
            key : 3,
            question : "Do you help customer in find workers ?",
            answer : "Yes we have connected with several workers who are skilled enough to deliver "
        },
        {
            key : 4,
            question : "Do you advices people on what products they should buy ?",
            answer : "Yes! infact we advice people on the best durable and beautiful products they ought to buy"
        },
    ]
  return (
    <div className='faqs'>
        <div className="faqs-title">
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className="faqs-container">
            {questions.map( qs => {
                return (
                    <div onClick={() => {
                        if(shif === qs.key){
                            setShif(0)
                        } else {
                            setShif(qs.key)
                        }
                    }} 
                    key={qs.key} 
                    className="question">
                        <h1>{qs.question}</h1>
                        <p className={shif === qs.key ? "activated" : null}>{qs.answer}</p>
                        <div className="faqs-img">
                            <img src={assets.arrow} className={`arrow-img ${shif === qs.key ? "shif" : null}`} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FAQs