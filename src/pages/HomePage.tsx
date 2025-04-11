import React from 'react';
import HomeStock from '../assets/HouseStock.jpg';
import '../styles/Home.css';
import MortgageCalculator from './MortgageCalculator';
import HeadShot from '../assets/DomanicHeadShot.jpg'
import Coffee from '../assets/Coffee.png';
import Award from '../assets/Award.png';

const listings = [
  {
    id: 1,
    image: HomeStock,
    address: '123 Palm Avenue',
    city: 'Sarasota, FL',
    price: '$850,000',
    beds: 4,
    baths: 3,
    badges: ['Featured'],  // Example badges
    listingUrl:""

  },
  {
    id: 2,
    image: HomeStock,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,200,000',
    beds: 5,
    baths: 4,
    badges: ['Active'],  // Example badge
    listingUrl:""
  },
  {
    id: 3,
    image: HomeStock,
    address: '789 Gulf Breeze Blvd',
    city: 'Bradenton, FL',
    price: '$975,000',
    beds: 3,
    baths: 2,
    badges: [],  // No badges for this one
    listingUrl:""
  },
];

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
          <p>
            With a passion for real estate and a commitment to excellence, I am dedicated to helping you find your dream home. My extensive knowledge of the Sarasota market, combined with my personalized approach, ensures that your home-buying experience is seamless and enjoyable.
          </p>
        </div>

        <div className='meet-your-realtor-right'>
          <img src={HeadShot} alt="Domanic Calamese Headshot" className='meet-your-realtor-image' />
        </div>

        {/* 👇 Button wrapper */}
        <div className='meet-your-realtor-button-wrapper'>
          <button className='luxury-button'>Find Out More</button>
        </div>
      </section>

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
    <button className='coffee-button'>Schedule a Coffee</button>
  </div>
</section>
<section className='accolades-container'>
  <h2 className='accolades-title'>Accolades</h2>
  <div className='accolades-grid'>
    <div className='accolade-box'>
    <img src={Award} alt="Award 2" className='accolade-image' />
      <p className='accolade-text'>Top Producer</p>
    </div>
    <div className='accolade-box'>
      <img src={Award} alt="Award 2" className='accolade-image' />
      <p className='accolade-text'>5-Star Zillow Rating</p>
    </div>
    <div className='accolade-box'>
    <img src={Award} alt="Award 2" className='accolade-image' />
      <p className='accolade-text'>Luxury Home Expert</p>
    </div>
    <div className='accolade-box'>
    <img src={Award} alt="Award 2" className='accolade-image' />
      <p className='accolade-text'>Million Dollar Club</p>
    </div>
    <div className='accolade-box'>
    <img src={Award} alt="Award 2" className='accolade-image' />
      <p className='accolade-text'>Client Favorite</p>
    </div>
    <div className='accolade-box'>
    <img src={Award} alt="Award 2" className='accolade-image' />
      <p className='accolade-text'>Top Negotiator</p>
    </div>
  </div>
</section>

<section className='new-listings-container'>
  <div className='new-listings-header'>
    <h2 className='new-listings-title'>New Listings</h2>
  </div>
  {listings.map(listing => (
    <div className='listing-card' key={listing.id}>
      <div className='listing-image-container'>
      <a href={listing.listingUrl} target="_blank" rel="noopener noreferrer">
            <img src={listing.image} alt={listing.address} className='listing-image' />
          </a>
        
        {/* Render badges */}
        {listing.badges.length > 0 && (
          <div className='listing-badges'>
            {listing.badges.map((badge, index) => (
              <span className='badge' key={index}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className='listing-details'>
        <h3 className='listing-address'>{listing.address}</h3>
        <p className='listing-city'>{listing.city}</p>
        <p className='listing-price'>{listing.price}</p>
        <p className='listing-beds-baths'>
          {listing.beds} Beds • {listing.baths} Baths
        </p>
      </div>
    </div>
  ))}
</section>

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

<section className='testimonials-container'>
  <div className='testimonials-header'>
    <h2 className='testimonials-title'>Testimonials</h2>
  </div>
  <div className='testimonials-slider'>
    <div className='testimonial-card'>
      <p className='testimonial-text'>"Domanic was amazing! He helped us find our dream home and made the process so easy."</p>
      <p className='testimonial-author'>- Sarah J.</p>
    </div>
    <div className='testimonial-card'>
      <p className='testimonial-text'>"I couldn't have asked for a better realtor. Highly recommend!"</p>
      <p className='testimonial-author'>- Mike T.</p>
    </div>
    <div className='testimonial-card'>
      <p className='testimonial-text'>"Professional, knowledgeable, and always available. A true gem in the real estate world!"</p>
      <p className='testimonial-author'>- Lisa K.</p>
    </div>
    <div className='testimonial-card'>
      <p className='testimonial-text'>"Domanic made selling our home a breeze. We got top dollar!"</p>
      <p className='testimonial-author'>- John D.</p>
    </div>
  </div>
</section>

  </>


  )
};
    



export default HomePage;