import React from 'react'
import './about.css'
import Myself from '../../assets/Myself.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__myself">
          <div className="about__pic">
            <img src={Myself} alt="About Pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <p className='small'>1+ Years</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <p className='small'>Coming Soon</p>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <p className='small'>5+ Completed</p>
            </article>
          </div>

          <p className='about__para'>
            I love exploring new things. I am looking forward to do
            more in Web development, also started with competitive
            programming.I am also interested in Python further datascience
            or Ai/ml.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About