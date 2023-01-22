import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer_logo'>Altaf</a>

      <ul className='permalinks'>
        <li><a href="# ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com" target='_blank' rel='noreferrer' ><FiInstagram /></a>
        <a href="https://twitter.com/altaf0032" target='_blank' rel='noreferrer' ><AiFillTwitterCircle /></a>
        <a href="https://www.linkedin.com/in/altaf-alam-432849234" target='_blank' rel='noreferrer' ><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <p>&copy; Altaf Alam. All rights reserved. </p>
      </div>
    </footer>
  )
}

export default Footer
