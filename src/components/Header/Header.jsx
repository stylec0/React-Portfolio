import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Profile.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
     <div className="container header__container">
       <h3>Hello I'm</h3>
       <h1>Charles Co</h1>
       <h5 className='text-light'>Experienced IT Professional | Full Stack Web Developer | Recent Software Engineering Graduate</h5>
       <CTA></CTA>
       <HeaderSocial></HeaderSocial>

       <div className='me'>
         <img src={ME} alt='me' />
         </div>

         <a href='#contact' className='scroll_down'>Scroll Down</a>
       </div> 
       </header>
  )
}

export default Header