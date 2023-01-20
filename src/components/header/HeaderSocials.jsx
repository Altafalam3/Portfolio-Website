import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="twitter.com/altaf0032" target="_blank"><BsLinkedin/></a>
      <a href="github.com/Altafalam3" target="_blank"><FaGithub/></a>
      <a href="twitter.com/altaf0032" target="_blank"><AiFillTwitterCircle/></a>
    </div>
  )
}

export default HeaderSocials