import React from 'react'
import Nav from '../components/Nav'
import Title from '../components/Title'
import SpinningImage from '../components/SpinningImage'

export default function Home() {
  return( 
    <div className="flex flex-col">
      <Title />
      <Nav />
      <SpinningImage />
    </div>)
}
