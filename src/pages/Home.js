import React from 'react'
import './Home.css'
import Nav from '../components/Nav'
import Title from '../components/Title'
import SpinningImage from '../components/SpinningImage'

export default function Home() {
  return( 
    <div className="home-container">
      <Title  />
      <Nav  />
      <SpinningImage />
    </div>)
}
