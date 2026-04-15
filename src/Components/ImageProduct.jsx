import React from 'react'
import product from './Product'
import Card from 'react-bootstrap/Card';

function ImageProduct() {
  const image=product.image_URL
  return (
    <div>
      
      <Card.Img variant="top" src={image} />
    </div>
  )
}

export default ImageProduct


 

