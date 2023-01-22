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
              <p className='small'>3+ Years Working</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <p className='small'>200+ worldwide</p>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <p className='small'>10+ Completed</p>
            </article>
          </div>

          <p className='about__para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos exercitationem error nobis. Ratione sed officiis voluptate voluptates corporis repellat, minus eligendi fugiat aliquam optio modi, repudiandae illo veniam nesciunt? Soluta?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About