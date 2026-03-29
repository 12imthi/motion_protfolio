import React from 'react'
import './Hero.css'
import profileImg from '../../assets/banner/profile.png'
import toolKnow from '../../assets/banner/tools.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
  <div className="hero">
  <div className="banner">
    <img src={profileImg} alt="banner" />

    <a 
      href="/resume.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      className="banner-btn"
    >
      Get My Resume
    </a>
  </div>
 <div>
  <img src={toolKnow} alt="banner" />
 </div>
</div>
  )
}

export default Hero;
