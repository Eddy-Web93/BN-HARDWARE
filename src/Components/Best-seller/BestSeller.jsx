import React from 'react'
import Card from '../Display/Card/Card'
import './BestSeller.css'
import { products } from '../../../Data'

const BestSeller = () => {
  return (
    <div className='best-sellers'>
        <h1 className='bs-title'>
            Our Best products
        </h1>
        <div className="bs-container">
        {products.map(items => {
          if(items.bestseller){
            return <Card key={items._id} img={items.image[0]} name={items.name} itemId={items._id} desc={items.description} price={items.price} />
          }
        })}
        </div>
    </div>
  )
}

export default BestSeller