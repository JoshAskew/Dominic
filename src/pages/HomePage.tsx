import React from 'react';
import HomeStock from '../assets/HouseStock.jpg';
import '../styles/Home.css';
import MortgageCalculator from './MortgageCalculator';
import HeadShot from '../assets/DomanicHeadShot.jpg'

const HomePage: React.FC = () => {
  return (
    <>
<section className='hero-container'>
  <div className='hero-background'>
     <img src={HomeStock} alt="House Stock" className='hero-image' />
     <div className='hero-overlay'></div>
     <h5 className='hero-subtitle'>Realtor in Sarasota, FL</h5>
     <h1 className='hero-title'>Not just homes—masterpieces of lifestyle, curated with precision and care</h1>
     <button className='hero-button'>Meet My Realtor</button>
    </div>
</section>
    <MortgageCalculator />
    <section className='meet-your-realtor-container'>
      <div className='meet-your-realtor-left'>
      <h5 className='meet-your-realtor-title'>Meet Your Realtor</h5>
      <h2 className='meet-your-realtor-description'>Domanic Calamese</h2>
     <p>With a passion for real estate and a commitment to excellence, I am dedicated to helping you find your dream home. My extensive knowledge of the Sarasota market, combined with my personalized approach, ensures that your home-buying experience is seamless and enjoyable.</p>
     </div>
     <div className='meet-your-realtor-right'>
      <img src={HeadShot} alt="House Stock" className='meet-your-realtor-image' />
     </div>
    </section>
    <section className='coffee-container'>
      <div className='coffee-background'>
        <h5 className='coffee-title'>Keep it Casual</h5>
        <p className='coffee-description'>I believe that every great conversation starts with a cup of coffee. Let's chat about your real estate needs over a warm brew.</p>
        <button className='coffee-button'>Schedule a Coffee</button>
      </div>
    </section>
   </>
  );
};

export default HomePage;