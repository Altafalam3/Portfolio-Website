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
              <p>Django backend with reactjs frontend.</p>
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
              <p>Business Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Modern React Websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database management of website.</p>
            </li>
          </ul>
        </article>

        {/* Technical Talks */}
        <article className='service'>
          <div className="service__head">
            <h3>Java Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App using Swing Framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App using Javafx Framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User friendly apps with backend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop and test software.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App using Java Awt.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services