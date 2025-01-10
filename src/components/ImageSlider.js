import React from 'react'
import { useState } from 'react'
import './ImageSlider.css'
function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  for (let i = 0; i < slides.length - 1; i++) {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => setCurrentIndex(0), 3000);
    }
    else {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 3000);
    }
  }
  
  return (
      <div className='slide-style' style={{ backgroundImage: `url(${slides[currentIndex].url})`, position: 'relative' }}></div>
  )
}

export default ImageSlider