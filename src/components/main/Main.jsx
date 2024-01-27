import React from 'react'
import './main.css';
import image from '../../assets/sidd2.png'

const Main = () => {
  return (
    <section className='pf__main' id='about'>
      <div className='pf__main-content-container'>
        <div className='pf__main-content-container-hello'>
          Hello All! I’m
        </div>
        <div className='pf__main-content-container-name'> 
          Siddhartha Devan V
        </div>
        <div className='pf__main-content-container-role'>
          Machine Learning | Front-end Dev
        </div>
        <div className='pf__main-content-container-subtext'>
          I’m an undergrad student pursuing B.Tech in Ai & Ds.  <br />
          I’m interested in Data Science, Deep Learning and <br />
          Web Development.
        </div>
      </div>

      <div className='pf__main-image-container'>
        <img src={image} alt="sidd" />
      </div>
     
    </section>
  )
}

export default Main
