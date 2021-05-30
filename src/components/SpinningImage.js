import React from 'react'
import TheImage from '../images/spinning_paper.jpg'

export default function SpinningImage() {
  return (
    <div className="spinning-image-container">
      <img className="spinning-image " 
      src={TheImage} 
      alt='You have been 
      bamboozled my friend.' />
    </div>
  )
}
