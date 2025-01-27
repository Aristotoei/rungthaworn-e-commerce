import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './ProductDetail.css'

function ProductDetail() {
  const params = useParams()
  const [quantity, setQuantity] = useState(1);
  const ItemData = [
    {
      id: 1,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item1',
      price: '10Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 2,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item2',
      price: '20Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 3,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item3',
      price: '30Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 4,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item4',
      price: '40Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 5,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item5',
      price: '50Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 6,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item6',
      price: '60Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 7,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item7',
      price: '70Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    },
    {
      id: 8,
      image: 'https://www.shutterstock.com/image-vector/new-item-text-effect-design-260nw-2529140099.jpg',
      name: 'Item8',
      price: '80Bahts',
      describe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dui odio,\
                vitae fermentum nibh varius vel. Integer venenatis egestas tellus vitae ultrices. Pellentesque\
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse\
                tempus ligula nec mauris ornare scelerisque. Etiam vel tortor porta, ullamcorper lacus eu, rhoncus dui.`
    }
  ]
  const plus = () => {
    setQuantity(quantity+1);
  }
  const minus = () => {
    quantity === 1 ? setQuantity(1) : setQuantity(quantity-1);;
  }
  return (
    <div className='main'>
      <div className='left-container'>
        <div className='product-image'>
          <img src={ItemData[params.id-1].image} alt={ItemData[params.id-1].name}/>
        </div>
      </div>
      <div className='right-container'>
        <div className='product-info'>
          <div><h1>{ItemData[params.id-1].name}</h1></div>
          <div><p>{ItemData[params.id-1].price}</p></div><br></br>
          <div><p style={{fontSize: '16px'}}>{ItemData[params.id-1].describe}</p></div><br></br>
          <div>Quantity : <span onClick={minus}>&#8722;</span> {quantity} <span onClick={plus}>&#43;</span></div>
          <div><button>Add to Cart</button></div>
        </div>       
      </div>
    </div>
  )
}

export default ProductDetail