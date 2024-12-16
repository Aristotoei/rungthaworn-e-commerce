import React from 'react'
import ImageSlider from './ImageSlider'

function Sliders() {
  const album = [
    {url: 'Pic1.jpg'},
    {url: 'Pic2.jpg'},
    {url: 'Pic3.jpg'}
  ];
  return (
    <>
      <ImageSlider slides={album}/>
    </>  
  )
}

export default Sliders