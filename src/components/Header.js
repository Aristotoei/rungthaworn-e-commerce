import React from 'react'
import './Header.css'

function Header() {
  return (
    <div id='header'>
      <div className='top'>
        <div className='brand'>
          <div style={{flexGrow: '3', padding: '0 8px'}}><a href='/'>logo</a></div>
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
              <a href='/'>Category1</a>
              <a href='/'>Category2</a>
              <a href='/'>Category3</a>
            </div>
          </li>
          <li><a href='/'>Discount</a></li>
          <li><a href='/'>Promotion</a></li>
          <li className='right'><a href='contact'>Contact</a></li>
        </ul>
      </div>
    </div> 
  )
}

export default Header