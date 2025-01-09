import React from 'react'
import CardItem from './CardItem'
function CardItemData() {
  const CardItemData = [
    {
      id: 1,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item1',
      price: '10Bahts'
    },
    {
      id: 2,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item2',
      price: '20Bahts'
    },
    {
      id: 3,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item3',
      price: '30Bahts'
    },
    {
      id: 4,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item4',
      price: '40Bahts'
    },
    {
      id: 5,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item5',
      price: '50Bahts'
    },
    {
      id: 6,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item6',
      price: '60Bahts'
    },
    {
      id: 7,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item7',
      price: '70Bahts'
    },
    {
      id: 8,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item8',
      price: '80Bahts'
    }
  ]
  return (
    <div><CardItem ItemData={CardItemData} /></div>
  )
}

export default CardItemData