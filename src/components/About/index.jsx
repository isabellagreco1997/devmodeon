import React from 'react';
import './styles.css';
import profileImage from './profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="about-container">
      <div className="title-container">
        <h2 className="about-title">About Me</h2>
      </div>
      <div className="about-content">
        <div className="image-container">
          <img className="profile-image" src={profileImage} alt="Profile" />
        </div>
        <div className='text-container'>
          <p>Hey there, awesome people! Looking to dive into the world of tech? Well, you're in luck because I'm here to guide you on this exciting journey. As a self-taught developer and immigrant in the UK, I know firsthand the struggles of not knowing where to begin. But fear not, I'm here to provide the support and resources you need to kickstart your tech dreams.</p>
          <p>Let's connect and grow together on my TikTok, LinkedIn, and Instagram profiles. Join my community where I share valuable insights, tips, and tricks to help you navigate the tech landscape with confidence. Together, we'll break down barriers, embrace opportunities, and create a thriving network of aspiring tech enthusiasts. Don't miss out on this incredible adventure – let's embark on it together!</p>
          <div className="social-media-container">
            <a href="https://www.tiktok.com/@isabellagrecodev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="3x" />
            </a>
            <span className="icon-space"></span>
            <a href="https://www.linkedin.com/in/isabella-greco-01960916a/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <span className="icon-space"></span>
            <a href="https://www.instagram.com/isabellasgreco" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
