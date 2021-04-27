import React from 'react'
import TheImage from '../images/spinning_paper.jpg'

export default function SpinningImage() {
  return (
    <div className="m-10">
      <img className="m-auto 
      animate-pulse 
      opacity-0 
      rounded-xl" 
      src={TheImage} 
      alt='You have been 
      bamboozled my friend.' />
    </div>
  )
}
