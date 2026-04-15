import React from 'react'
import product from './Product'

function Name() {
  const name=product.name
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Name
