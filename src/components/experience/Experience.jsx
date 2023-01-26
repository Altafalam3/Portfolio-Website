import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

// Web dev skills
const webdev = [
  {
    lang: 'HTML5',
    level: 'Experienced'
  },
  {
    lang: 'CSS3',
    level: 'Experienced'
  },
  {
    lang: 'JAVASCRIPT',
    level: 'Experienced'
  },
  {
    lang: 'REACT JS',
    level: 'Experienced'
  },
  {
    lang: 'MYSQL',
    level: 'Experienced'
  },
];

// Languages Skills
const languages = [
  {
    lang: 'C',
    level: 'Experienced'
  },
  {
    lang: 'C++',
    level: 'Experienced'
  },
  {
    lang: 'JAVA',
    level: 'Experienced'
  },
  {
    lang: 'PYTHON',
    level: 'Experienced'
  },

];

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="exp__webdev">
          <h3>Web Development</h3>
          <div className="exp__content">
            {
              webdev.map((props, index) => {
                return (
                  <article key={index} className="exp__details">
                    <BsPatchCheckFill className='exp__details-icon' />
                    <div>
                      <h4>{props.lang}</h4>
                      <p className='text-light small'>{props.level}</p>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

        <div className="exp__lang">
          <h3>Languages</h3>
          <div className="exp__content">
            {
              languages.map((props, index) => {
                return (
                  <article key={index} className="exp__details">
                    <BsPatchCheckFill className="exp__details-icon" />
                    <div>
                      <h4>{props.lang}</h4>
                      <p className='text-light small'>{props.level}</p>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience