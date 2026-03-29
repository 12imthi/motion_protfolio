import React from 'react'
import './Hero.css'
import profileImg from '../../assets/banner/profile2.png'
import toolKnow from '../../assets/banner/tools.png'
import textAnimation from '../../assets/text_animation/text.mp4'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
  <div className="hero">
     
  <div className="banner">
<h1><h1><h1></h1></h1></h1> */}
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
