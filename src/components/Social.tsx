import '../styles/Social.css';
import React from 'react';
import YouTube from '../assets/YouTube.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Instagram from '../assets/Instagram.svg';
import Facebook from '../assets/Facebook.svg';
import Twitter from '../assets/X.svg';

const Social: React.FC = () => {
  return (
    <>
      <div className="social-container">
        <h6 className='social-subtitle'>Let's Connect</h6>
        <h1 className='social-header'>I'm Social</h1>
        <div className="social-icons-container">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={YouTube} alt="Youtube" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="X" />
          </a> 
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook" />
          </a> 
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={LinkedIn} alt="Linkedin" />
          </a> 
          </div>
      </div>
    </>
  );
};

export default Social;