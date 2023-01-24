import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { useState } from 'react'
import Auth from '../../validation/Auth'

const Contact = () => {

  const [user, setUser] = useState({
    name: "", email: "", message: ""
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 className='fixmail'>altaf.alam0032@gmail.com</h5>
            <a href="mailto:altaf.alam0032@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiFillTwitterCircle className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@Altaf0032</h5>
            <a href="https://twitter.com/altaf0032" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Altaf Alam</h5>
            <a href="https://www.linkedin.com/in/altaf-alam-432849234" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        {/* Contact form */}
        <form method='POST' className='cform'>
          <input type="text" name='name' placeholder='Your full Name' required
            value={user.name}
            onChange={handleInputs}
          />
          <input type="email" name='email' placeholder='Your Email' required
            value={user.email}
            onChange={handleInputs}
          />
          <textarea name="message" rows="7" placeholder='Your Message' required
            value={user.message}
            onChange={handleInputs}
          ></textarea>
          <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact