import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.png'
import IMG3 from '../../assets/Portfolio3.png'
import IMG4 from '../../assets/Portfolio4.png'
import IMG5 from '../../assets/Portfolio5.png'
// import IMG6 from '../../assets/Portfolio6.png'

const data =[
  {
    id:1,
    image:IMG1,
    title:'Spotify Landing Page',
    github: 'https://github.com/Altafalam3/Spotify_clone',
    demo: 'https://altafalam3.github.io/Spotify_clone/'
  },
  {
    id:2,
    image:IMG2,
    title:'Expense Tracker',
    github:'https://github.com/Altafalam3/Expense-Tracker',
    demo: 'https://altafalam3.github.io/Expense-Tracker/'
  },
  {
    id:3,
    image:IMG3,
    title:'Swaniti',
    github: 'https://github.com/Altafalam3/Swaniti-PROJECT',
    demo: 'https://altafalam3.github.io/Swaniti-PROJECT/LP/index.html'
  },
  {
    id:4,
    image:IMG4,
    title:'Guess the Number with Voice',
    github: 'https://github.com/Altafalam3/Guess-the-number-with-voice-assistant',
    demo: 'https://github.com/Altafalam3/Guess-the-number-with-voice-assistant/blob/main/README.md'
  },
  {
    id:5,
    image:IMG5,
    title:'EcoSavvy',
    github: 'https://github.com/Altafalam3/EcoSavvy',
    demo: 'https://github.com/Altafalam3/EcoSavvy/blob/main/README.md'
  },
  {
    id:6,
    image:IMG1,
    title:'Spotify Landing Page',
    github: 'https://github.com/Altafalam3/Spotify_clone',
    demo: 'https://altafalam3.github.io/Spotify_clone/'
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
                <img src={props.image} alt={props.title} />
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