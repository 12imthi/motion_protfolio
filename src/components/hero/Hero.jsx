import React from 'react'
import './Hero.css'
import profileImg from '../../assets/Untitled design.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profileImg} alt="" style={{borderRadius: '50%', width: '180px'}} />
        <h1><span>I'm Imthiyaz, </span> Motion Graphics Designer</h1>
        <p>
          Hi! I’m Imthiyaz, a creative Motion Graphics Designer passionate about bringing ideas to life through stunning visuals and smooth animations. I specialize in crafting engaging videos, title animations, promotional content, and motion graphics using industry-standard tools like Photoshop, Illustrator, Premiere Pro, and After Effects. I love turning concepts into visually compelling stories that captivate audiences.
        </p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' href="#about">
                Know More About Me
              </AnchorLink>
            </div>
            <div className="hero-resume">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;
