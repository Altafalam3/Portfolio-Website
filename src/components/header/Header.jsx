import React from 'react'
import './header.css'
import Cta from './Cta'
import Myself from '../../assets/Myself.jpeg'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Altaf Alam</h1>
        <h5 className='text-light'>Web Developer</h5>
        <Cta />
        <img src={Myself} alt='myself' />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>

    </header>
  )
}

export default Header