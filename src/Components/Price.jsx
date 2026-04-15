import React from 'react'
import product from './Product'

function Price() {
  const price=product.price
  return (
    <div>
      <h2>Le prix : {price} DA</h2>
    </div>
  )
}

export default Price
