import React from 'react'
import { Icon } from 'semantic-ui-react'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://github.com/stylec0" target="_blank">
        <Icon size="big" name="github"></Icon>
        </a> 
        <a href="https://www.linkedin.com/in/charlesvanco/" target="_blank">
        <Icon size="big" name="linkedin"></Icon>
        </a> 
    </div>
  )
}

export default HeaderSocials

//const HeaderSocials = () => {
//  return (
//    <div className='header_socials'>
//      <Icon.Group size='huge'>
//        <Icon size='huge' name="linkedin"/>
//        <a href="https://github.com/stylec0"></a>
//        </Icon.Group>
//    </div>
//  )
//}

