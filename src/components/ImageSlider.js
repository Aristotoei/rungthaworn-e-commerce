import React from 'react'
import { useState } from 'react'

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    width: '100%',
    height: '480px',
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const leftArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  };

  const rightArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: '1',
    cursor: 'pointer'
  };

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
      <div style={leftArrow} onClick={goToPrevious}>←</div>
      <div style={slideStyle}></div>
      <div style={rightArrow} onClick={goToNext}>→</div>
    </div>
  )
}

export default ImageSlider