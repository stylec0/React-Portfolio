import React from 'react'
import './Contact.css'
import { Icon } from 'semantic-ui-react'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <Icon className='contact_option-icon' size='large' name='mail'></Icon>
            <h4>Email</h4>
            <h5>cvco20@gmail.com</h5>
            <a href='mailto:cvco20@gmail.com' target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <Icon className='contact_option-icon' size='large' name='facebook messenger'></Icon>
            <h4>Messenger</h4>
            <h5>facebook messenger</h5>
            <a href='https://m.me/charles.v.co' target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <Icon className='contact_option-icon' size='large' name='whatsapp'></Icon>
            <h4>WhatsApp</h4>
            <h5>206-214-7008</h5>
            <a href='https://api.whatsapp.com/send?phone=2062147008' target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <input type='subject' name='subject' placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact