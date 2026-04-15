import React from 'react'
import product from './Product'

function Description() {
  const description=product.description
  return (
    <div>
      <p>{description}</p>
    </div>
  )
}

export default Description
