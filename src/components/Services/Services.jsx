import React from 'react'
import './Services.css'
import { Icon } from 'semantic-ui-react'

const Services = () => {
  return (
    <section id='services'>
      <h5> What I Can Do For You</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <Icon size='large' name='check circle outline'></Icon>
              <p> This is a test here</p>
            </li>
            <li>
              <Icon size='large' name='check circle outline'></Icon>
              <p> This is a test here</p>
            </li>
            <li>
              <Icon size='large' name='check circle outline'></Icon>
              <p> This is a test here</p>
            </li>
            <li>
              <Icon size='large' name='check circle outline'></Icon>
              <p> This is a test here</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services