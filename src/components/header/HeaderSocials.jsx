import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/altaf-alam-432849234" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Altafalam3" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/altaf0032" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials