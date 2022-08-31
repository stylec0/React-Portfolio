import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Profile.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Charles Co</h1>
       <h5 className='text-light'>Fullstack Developer</h5>
       <CTA></CTA>
       <br/>
       <br/>
       <br/>
       <HeaderSocial></HeaderSocial>

       <div className='me'>
         <img src={ME} alt='me' />
         </div>

         <a href='#contact' className='scroll_down'>Scroll Down</a>
       </div> 
  )
}

export default Header