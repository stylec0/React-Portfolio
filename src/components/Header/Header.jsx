import React from 'react'
import './Header.css'
import CTA from './CTA'

const Header = () => {
  return (
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Charles Co</h1>
       <h5 className='text-light'>Fullstack Developer</h5>
       <CTA></CTA>
       </div> 
  )
}

export default Header