import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ img, name, price, itemId, catergory, desc}) => {
  return (
    <div className='card'>
      <img className='card-img' src={img} alt="" />
      <h1 className='card-title'>{name}</h1>
      <p className='price'> Price : <span>Ksh {price}</span></p>
      <p className="card-dp">
        {desc}
      </p>
      <Link to={`/item/${catergory}/${itemId}`} className="purchase-btn">Purchase</Link>
    </div>
  )
}

export default Card