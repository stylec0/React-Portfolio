import React from 'react'
import { Icon } from 'semantic-ui-react'
import './About.css'
import ME from '../../assets/Charles.jpg'

const About = () => {
  return (
    <section id="about">About
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className= "container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about_content">
          <div classNmae="about_cards">
          <article className='about_card'>
            <Icon size="big" name="vcard" ></Icon>
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className='about_card'>
            <Icon size="big" name="cube" ></Icon>
            <h5>Projects</h5>
            <small>Full CRUD Projects</small>
          </article>
          </div>

          <p>Experienced and highly motivated Information Technology professional and a
          recent full-stack software engineering graduate of General Assembly. Strives
          to excel and driven to learn new skills in any situation. Adept to Technology &
          Frameworks, Software, Hardware, and Networking. Keen ability to trouble
          shooting and providing technical support. Known to be a great team player
          that is easy to work with and brings positive energy to the workplace. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
      </div>
    </div>
    </section>
  )
}

export default About