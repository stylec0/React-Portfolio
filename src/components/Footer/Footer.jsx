import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Charles Co</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer