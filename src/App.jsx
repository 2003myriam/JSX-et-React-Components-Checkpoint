import { useState } from 'react'
import './App.css'
import Name from './Components/Name'
import Price from './Components/Price'
import Description from './Components/Description'
import ImageProduct from './Components/ImageProduct'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  

  return (
    <>
      <Card style={{ width: '18rem' }}>
       
      <ImageProduct/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
           <Description/>
        </Card.Text>
        <Button variant="primary"> <Price/></Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default App
