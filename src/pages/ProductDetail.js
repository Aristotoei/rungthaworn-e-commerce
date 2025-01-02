import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const params = useParams()
  return (
    <>
      <div>ProductDetail</div>
      <div>Product ID: {params.id}</div>
    </>
  )
}

export default ProductDetail