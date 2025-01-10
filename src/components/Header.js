import React from 'react'
import './Header.css'

function Header() {
  return (
    <div id='header'>
      <div className='top'>
        <div className='brand'>
          <div style={{flexGrow: '3'}}><a href='/'>logo</a></div>
          <div style={{flexGrow: '5'}}>Rungthaworn Minimart</div>
        </div>
        <div className='search-box'>
          <input type='text'></input>
          <img src='/search-icon.png' alt='search-icon'/>
        </div>
        <div className='cart'>
          <div>Cart</div>
        </div>
      </div>

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
          <li className='right'><a href='contact'>Contact</a></li>
        </ul>
      </div>
    </div> 
  )
}

export default Header