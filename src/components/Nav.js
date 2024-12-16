import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Category</li>
        <li>Offers</li>
        <li id='active'>Contact</li>
      </ul>
    </div> 
  )
}

export default Nav