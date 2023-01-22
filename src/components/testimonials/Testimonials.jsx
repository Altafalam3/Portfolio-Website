import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='article'>
          <div className="client__avatar">
            <div className="client__avatar">
              <img src={AVT1} alt="" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials