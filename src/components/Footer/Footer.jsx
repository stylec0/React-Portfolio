import React from 'react'
import './Footer.css'
import { Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Charles Co</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com'><Icon className="footer_icon" size='large' name='facebook'></Icon></a>
        <a href='https://instagram.com'><Icon className="footer_icon" size='large' name='instagram'></Icon></a>
        <a href='https://twitter.com'><Icon className="footer_icon" size='large' name='twitter'></Icon></a>
      </div>

    <div className="footer_copyright">
     {/*Add Copyright here &copy; ColiveStream CLS Casters. All rights reserved*/}
    </div>
    </footer>
  )
}

export default Footer