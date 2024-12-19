import React from 'react'
import './CardItem.css'

function CardItem({ ItemData }) {
  return (
    <div className='main-container'>
      {
        ItemData.map((item) => {  
          return (
            <div key={item.id} className='card'>
              <div className='card-image'>
                <img src={item.image} alt={item.name} />
              </div>
              <div className='card-content'>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardItem