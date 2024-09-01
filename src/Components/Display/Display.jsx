import React from 'react'
import './Display.css'
import Card from './Card/Card'
import { products } from '../../../Data'
import { assets } from '../../../Data'

const Display = () => {
  return (
    <div className='display'>
      {products.map(items => {
        return <Card key={items._id} img={items.image[0]} name={items.name} itemId={items._id} desc={items.description} price={items.price}  />
      })}
    </div>
  )
}

export default Display