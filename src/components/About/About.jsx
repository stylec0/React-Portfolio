import React from 'react'
import { Icon } from 'semantic-ui-react'
import './About.css'
import ME from '../../assets/Charles.jpg'

const About = () => {
  return (
    <section id="about">
    <h2 className='section-headers'>About Me</h2>

    <div className= "container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Me"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
            <Icon size="big" name="vcard" ></Icon>
            <h5>IT Experience</h5>
            <small>10+ years working in the industry</small>
          </article>

          <article className='about_card'>
            <Icon size="big" name="cube" ></Icon>
            <h5>Software Development</h5>
            <small>Recent Graduate of General Assembly with experience creating Full-Stack CRUD applications using Javascript, Express, React, and Django</small>
          </article>
  

          <article className='about_card'>
            <Icon size="big" name="handshake" ></Icon>
            <h5>Customer Driven</h5>
            <small>15+ years of providing an exceptional customer service experience to all clients </small>
          </article>
          </div>

          <p>Experienced and highly motivated Information Technology professional and a
          recent full-stack software engineering graduate of General Assembly. Strives
          to excel and driven to learn new skills in any situation. Adept to Technology &
          Frameworks, Software, Hardware, and Networking. Keen ability to trouble
          shooting and providing technical support. Known to be a great team player
          that is easy to work with and brings positive energy to the workplace. 
          </p>

          <p>In my free time, I enjoy playing video games (CounterStrike, Dota 2, Lost Ark, Call of Duty: Warzone) and streaming on Twitch.tv, building custom mechanical keyboards,
            playing volleyball, traveling to Disneyland/Disney World and spending time with my beautiful wife Christina and our newborn daughter Alayna!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
          
      </div>
    </div>
    </section>
  )
}

export default About