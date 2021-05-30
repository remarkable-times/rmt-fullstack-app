import React from 'react'
import './Nav.css'
import { FaLinux } from "react-icons/fa";




export default function Nav() {
  return (
    <div className="nav-container">
      <FaLinux />
      <a href="/">Home</a>
      <a href="/newsletters">Newsletters</a>
      </div>
  )
}
