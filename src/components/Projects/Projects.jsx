import React from 'react'
import './Projects.css'
import data from '../../assets/ProjectData.jsx'

//const data = [
//  {
//      id: 1,
//      image: "https://github.com/stylec0/Blackjack/raw/main/css/card-deck-css/images/Other/Screen%20Shot%202021-12-16%20at%209.38.43%20PM.png", 
//      title: "Blackjack",
//      github: 'https://github.com/stylec0/Blackjack',
//      demo: "https://stylec0.github.io/Blackjack/"
//  },
//  {
//      id: 2,
//      image: "https://camo.githubusercontent.com/a01cb167e8a12222b4419c2b7b7ccfe7ff156df391a9edfa8759b0ffad87663b/68747470733a2f2f692e696d6775722e636f6d2f364c73426a4a412e6a7067",
//      title: "StyleKeebMods",
//      github: 'https://github.com/stylec0/StyLeKeebMods',
//      demo: "https://stylekeebmods.herokuapp.com/"
//  },
//  {
//      id: 3,
//      image:"https://camo.githubusercontent.com/b90489a5c2668eaa6f18a7c27d06a222ca71ef7b228a1108ee869508e8c2a5bc/68747470733a2f2f692e696d6775722e636f6d2f377835354d72342e706e67", 
//      title: "everyJob",
//      github: 'https://github.com/stylec0/everyJob',
//      demo: "https://everyjobs.herokuapp.com/"
//  },
//  {
//      id: 4,
//      image:"https://camo.githubusercontent.com/a44543e878a24d64c4f980474129a6c415058a5068e77ea82ce0edff660cbff8/68747470733a2f2f692e696d6775722e636f6d2f6c4a77774c4f342e706e67", 
//      title: "1StopShop",
//      github: 'https://github.com/stylec0/1StopShop',
//      demo: "https://project-1stopshop.herokuapp.com"
//  }
//]

const Projects = () => {
  return (
    <section id='projects'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className="container projects_container">
      {
        data.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className='projects_item'>
            <div className="projects_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='projects_item-cta'>
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
            </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Projects

{/*<section id='projects'>Projects
<h5>My Recent Work</h5>
<h2>Projects</h2>

<div className="container projects_container">
  <article className='projects_item'>
    <div className="projects item-image">
      <img src='' alt='' />
    </div>
      <h3>This is a portfolio item title</h3>
      <a href='https://github.com/stylec0' className='btn'>Github</a>
      <a href='https://github.com/stylec0' className='btn btn-primary' target='_blank'>Live Demo</a>
  </article>
</div>
</section>*/}