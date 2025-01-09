import React from 'react'
import { useState } from 'react'
import './ImageSlider.css'
function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === 2
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={{position: 'relative'}}>
      <div className='left-arrow' onClick={goToPrevious}>⮜</div>
      <div className='slide-style' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
      <div className='right-arrow' onClick={goToNext}>⮞</div>
    </div>
  )
}

export default ImageSlider