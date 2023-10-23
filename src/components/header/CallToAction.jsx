import React from 'react'
import Resume from '../../assets/Altaf_Resume.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CallToAction