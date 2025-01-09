import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Python Developer */}
        <article className='service'>
          <div className="service__head">
            <h3>Python Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flask / Django backend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Automation Projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Scraping.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Analytics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Game development with Pygame.</p>
            </li>
          </ul>
        </article>

        {/* Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Responsive Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Maintainence.</p>
            </li>
          </ul>
        </article>

        {/* AIML Developer */}
        <article className='service'>
          <div className="service__head">
            <h3>AIML Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Chatbot using LLMs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Machine Learning Models.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Multi Agent System using Autogen.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deep Learning Projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>GenAI based projects.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services