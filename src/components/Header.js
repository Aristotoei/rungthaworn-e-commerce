import React from 'react'
import './Header.css'

function Nav() {
  return (
    <div id='header'>
      <div className='brand'>
        <div>logo</div>
        <div>Rungthaworn Minimart</div>
      </div>
      <div className='search-box'>
        <input type='text'></input>
      </div>
      <div className='cart'>
        <div>Cart</div>
      </div>
    </div>
  )
}

export default Nav