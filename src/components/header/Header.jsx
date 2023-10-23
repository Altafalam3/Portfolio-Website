import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import Myself from '../../assets/Myself4.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Altaf Alam</h1>
        <h4 className='text-light'>Full Stack Web Developer, AI ML enthusiast</h4>
        <CallToAction />
        <HeaderSocials />
        <div className="myself">
          <img src={Myself} alt='myself' x="50" y="200"/>
        </div>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </header>
  )
}

export default Header