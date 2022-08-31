import React from 'react'
import { Icon } from 'semantic-ui-react'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <a href='#'>
      <Icon size ="big" name="home"></Icon>
      </a>
      <a href='#about'>
      <Icon size ="big" name="user circle"></Icon>
      </a>
      <a href='#experience'>
      <Icon size ="big" name="book"></Icon>
      </a>
      <a href='#services'>
      <Icon size ="big" name="talk"></Icon>
      </a>
      <a href='#contact'>
      <Icon size ="big" name="phone"></Icon>
      </a>
    </nav>
  )
}

export default Nav