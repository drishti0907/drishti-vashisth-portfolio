import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessageLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f49nvmv', 'template_oj3dlhb', form.current, 'bGgTvk0_snIxfOqYc')
    e.target.reset()
      };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>drishtivashisth2002@gmail.com</h5>
          <a href="mailto:drishtivashisth2002@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
          <RiMessageLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>drishtivashisth</h5>
          <a href="mailto:drishtivashisth2002@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+12345678</h5>
          <a href="https://api.whatsapp.com/send?phone=+918570891561" target='_blank'>Send a message</a>
          </article>
        </div>
        {/*end of contact details */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email id' required  /> 
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>      
        </form>
      </div>
    </section>
  )
}

export default Contacts