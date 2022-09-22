import React from 'react'
import { Icon } from 'semantic-ui-react'
import './Nav.css'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ""}>
      <Icon size ="big" name="home"></Icon>
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""}>
      <Icon size ="big" name="user circle"></Icon>
      </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""}>
      <Icon size ="big" name="graduation cap"></Icon>
      </a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ""}>
      <Icon size ="big" name="folder open"></Icon>
      </a>
      {/*<a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === 'services' ? 'active' : ""}>
      <Icon size ="big" name="talk"></Icon>
      </a> ---------- Disabled until real services can be added*/}
      <a href='#recommendations' onClick={() => setActiveNav('#recommendations')} className={activeNav === '#recommendations' ? 'active' : ""}>
      <Icon size ="big" name="talk"></Icon>
      </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""}>
      <Icon size ="big" name="phone"></Icon>
      </a>
    </nav>
  )
}

export default Nav