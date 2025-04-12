import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import HomeStock from '../assets/HouseStock.jpg';
import '../styles/Home.css'; 
import MortgageCalculator from '../components/MortgageCalculator';
import Coffee from '../assets/Coffee.png';
import FAQ from '../components/FAQ';
import Listings from '../components/Listings';
import Accolades from '../components/Accolades';
import MeetDomanic from '../components/MeetDomanic';
import Testimonials from '../components/Testimonials';
import GetInTouch from '../components/GetInTouch';
import ContactForm from '../components/ContactForm';

  const HomePage: React.FC = () => {

  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className='hero-container'>
        <div className='hero-background'>
          <img src={HomeStock} alt="House Stock" className='hero-image' />
          <div className='hero-overlay'></div>
          <h5 className='hero-subtitle'>Realtor in Sarasota, FL</h5>
          <h1 className='hero-title'>Not just homes—masterpieces of lifestyle, curated with precision and care</h1>
          <Link to='./meet-my-realtor' className='hero-button'>Meet My Realtor</Link>
        </div>
      </section>

      <MortgageCalculator />

      <MeetDomanic />

      <section className='coffee-container'>
        <div className='coffee-content'>
          <div className='coffee-left'>
            <h5 className='coffee-title'>Keep it Casual</h5>
            <p className='coffee-description'>
              I believe that every great conversation starts with a cup of coffee. Let's chat about your real estate needs over a warm brew.
            </p>
          </div>
          <div className='coffee-right'>
            <img src={Coffee} alt="Coffee" className='coffee-image' />
          </div>
        </div>
        <div className='coffee-button-wrapper'>
          <button className='coffee-button' onClick={scrollToContact}>Schedule a Coffee</button>
        </div>
      </section>

      <Accolades />
      
      <Listings />

      <section className='services-container'>
        <div className='services-header'>
          <h2 className='services-title'>Services</h2>
        </div>
        <div className='services-cards'>
          <div className='service-card'>
            <h3 className='service-heading'>Buying a New Home?</h3>
            <p className='service-text'>Let me help you find your perfect place. From showings to closing, I've got you covered.</p>
            <button className='service-button'>Start Buying</button>
          </div>
          <div className='service-card'>
            <h3 className='service-heading'>Selling Your Home?</h3>
            <p className='service-text'>Ready to list? I'll help you get top dollar with smart marketing and strong negotiation.</p>
            <button className='service-button'>Start Selling</button>
          </div>
        </div>
      </section>

      <section className='areas-container'>
        <div className='areas-header'>
          <h2 className='areas-title'>Areas I Serve</h2>
        </div>
        <div className='areas-grid'>
          {[
            { city: 'Sarasota', image: HomeStock },
            { city: 'Venice', image: HomeStock },
            { city: 'Bradenton', image: HomeStock },
            { city: 'Siesta Key', image: HomeStock },
            { city: 'Longboat Key', image: HomeStock },
            { city: 'Lakewood Ranch', image: HomeStock },
          ].map((area, index) => (
            <div
              key={index}
              className='area-card'
              style={{ backgroundImage: `url(${area.image})` }}
            >
              <span className='area-name'>{area.city}</span>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <FAQ />

      <GetInTouch ref={contactRef}/>

      <ContactForm />
      
      <div className='footer'></div>
        

    </>


  )
};




export default HomePage;