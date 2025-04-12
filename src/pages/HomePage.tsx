import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroBackground from '../assets/Hero-Background.png'
import '../styles/Home.css'; 
// import MortgageCalculator from '../components/MortgageCalculator';
import Coffee from '../assets/CoffeeHouse.png';
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
          <img src={HeroBackground} alt="House Stock" className='hero-image' />
          <div className='hero-overlay'></div>
          <h5 className='hero-subtitle'><span className='dash-span'>--</span> Your Sarasota Lifestyle Starts Here <span className='dash-span'>--</span></h5>
          <h1 className='hero-title'>Find Your Dream<br/>Home by the <span className='gulf'>Gulf</span></h1>
          <p className='hero-description'>Whether you're buying, selling, or just exploring your options, I'm here to help you navigate every step with confidence.</p>
          <Link to='./meet-my-realtor' className='gold-button'>LET'S CONNECT</Link>
        </div>
      </section>

      {/* <MortgageCalculator /> */}

      <MeetDomanic />

      <section className='coffee-container'>
        <div className='coffee-content'>
          <div className='coffee-left'>
            <h2 className='coffee-title'>Coffee With <span className='domanic-span'>Domanic</span></h2>
            <p className='coffee-description'>
            Buying your first home, selling your current one, or just exploring your options? Let's meet up over coffee and talk about what you're looking for. No pushy sales pitch—just honest, local advice to help you get started.
            </p>
            <div className='coffee-button-wrapper'>
          <button className='coffee-button' onClick={scrollToContact}>Schedule a Coffee</button>
        </div>
          </div>
          <div className='coffee-right'>
            <img src={Coffee} alt="Coffee" className='coffee-image' />
          </div>
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
            { city: 'Sarasota', image: HeroBackground },
            { city: 'Venice', image: HeroBackground },
            { city: 'Bradenton', image: HeroBackground },
            { city: 'Siesta Key', image: HeroBackground },
            { city: 'Longboat Key', image: HeroBackground },
            { city: 'Lakewood Ranch', image: HeroBackground },
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