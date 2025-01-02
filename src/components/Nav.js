import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li className='dropdown'><a href='/'>Category</a>
          <div className='dropdown-content'>
            <a href='1.1'>Category1</a>
            <a href='1.2'>Category2</a>
            <a href='1.3'>Category3</a>
          </div>
        </li>
        <li><a href='2'>Discount</a></li>
        <li><a href='3'>Promotion</a></li>
        <li className='right'><a href='4'>Contact</a></li>
      </ul>
    </div> 
  )
}

export default Nav