import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.png'
import IMG3 from '../../assets/Portfolio3.png'
import IMG4 from '../../assets/Portfolio4.png'
import IMG5 from '../../assets/Portfolio5.png'
import IMG6 from '../../assets/Portfolio6.png'

const data =[
  {
    id:1,
    image:IMG5,
    title:'EcoSavvy',
    github: 'https://github.com/Altafalam3/EcoSavvy',
    demo: 'https://github.com/Altafalam3/EcoSavvy/blob/main/README.md'
  },
  {
    id:2,
    image:IMG2,
    title:'PhishNet',
    github:'https://github.com/Altafalam3/PhishNet',
    demo: 'https://github.com/Altafalam3/PhishNet/blob/main/README.md'
  },
  {
    id:3,
    image:IMG1,
    title:'SmartLegalX',
    github: 'https://github.com/Altafalam3/SmartLegalX',
    demo: 'https://github.com/Altafalam3/SmartLegalX/blob/main/README.md'
  },
  {
    id:4,
    image:IMG4,
    title:'Synopsize',
    github: 'https://github.com/Altafalam3/Synopsize',
    demo: 'https://github.com/Altafalam3/Synopsize/blob/main/README.md'
  },
  {
    id:5,
    image:IMG6,
    title:'NO - SPAM',
    github: 'https://github.com/Altafalam3/NO-SPAM/',
    demo: 'https://github.com/Altafalam3/NO-SPAM/blob/main/README.md'
  },
  {
    id:6,
    image:IMG3,
    title:'Swaniti',
    github: 'https://github.com/Altafalam3/Swaniti-PROJECT',
    demo: 'https://altafalam3.github.io/Swaniti-PROJECT/LP/index.html'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((props)=>{
            return(
              <article key={props.id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={props.image} alt={props.title} className="portfolio__item-img"/>
              </div>
              <h3>{props.title}</h3>
              <div className="portfolio__item-cta">
                <a href={props.github} className='btn' target='_blank' rel='noreferrer'>&lt;Code <span className='sml'>/</span>&gt;</a>
                <a href={props.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio