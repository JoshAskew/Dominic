import React, { useState } from 'react';
import HomeStock from '../assets/HouseStock.jpg';
import '../styles/ListingsPage.css';
import SaleHouse from '../assets/SaleHouse.png';
import Bed from '../assets/Bed.png';
import Bath from '../assets/Bath.svg';
import ArrowRight from '../assets/ArrowRight.png';
import ListingHero from '../assets/ListingHero.png';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';



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
    listingUrl: ""

  },
  {
    id: 2,
    image: SaleHouse,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,200,000',
    beds: 5,
    baths: 4,
    badges: ['Active'],  // Example badge
    listingUrl: ""
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
    listingUrl: ""
  },
  {
    id: 4,
    image: SaleHouse,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,600,000',
    beds: 5,
    baths: 4,
    badges: ['Pending'],  // Example badge
    listingUrl: ""
  },
  {
    id: 5,
    image: SaleHouse,
    address: '123 Palm Avenue',
    city: 'Sarasota, FL',
    price: '$850,000',
    beds: 4,
    baths: 3,
    badges: ['Featured'],  // Example badges
    listingUrl: ""

  },
  {
    id: 6,
    image: HomeStock,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,200,000',
    beds: 5,
    baths: 4,
    badges: ['Active'],  // Example badge
    listingUrl: ""
  },
  {
    id: 7,
    image: SaleHouse,
    address: '789 Gulf Breeze Blvd',
    city: 'Bradenton, FL',
    price: '$975,000',
    beds: 3,
    baths: 2,
    badges: [],  // No badges for this one
    listingUrl: ""
  },
  {
    id: 8,
    image: HomeStock,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,600,000',
    beds: 5,
    baths: 4,
    badges: ['Pending'],  // Example badge
    listingUrl: ""
  },
  {
    id: 9,
    image: HomeStock,
    address: '123 Palm Avenue',
    city: 'Sarasota, FL',
    price: '$850,000',
    beds: 4,
    baths: 3,
    badges: ['Featured'],  // Example badges
    listingUrl: ""

  },
  {
    id: 10,
    image: SaleHouse,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,200,000',
    beds: 5,
    baths: 4,
    badges: ['Active'],  // Example badge
    listingUrl: ""
  },
  {
    id: 11,
    image: HomeStock,
    address: '789 Gulf Breeze Blvd',
    city: 'Bradenton, FL',
    price: '$975,000',
    beds: 3,
    baths: 2,
    badges: [],  // No badges for this one
    listingUrl: ""
  },
  {
    id: 12,
    image: SaleHouse,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,600,000',
    beds: 5,
    baths: 4,
    badges: ['Pending'],  // Example badge
    listingUrl: ""
  },
  {
    id: 13,
    image: SaleHouse,
    address: '123 Palm Avenue',
    city: 'Sarasota, FL',
    price: '$850,000',
    beds: 4,
    baths: 3,
    badges: ['Featured'],  // Example badges
    listingUrl: ""

  },
  {
    id: 14,
    image: HomeStock,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,200,000',
    beds: 5,
    baths: 4,
    badges: ['Active'],  // Example badge
    listingUrl: ""
  },
  {
    id: 15,
    image: SaleHouse,
    address: '789 Gulf Breeze Blvd',
    city: 'Bradenton, FL',
    price: '$975,000',
    beds: 3,
    baths: 2,
    badges: [],  // No badges for this one
    listingUrl: ""
  },
  {
    id: 16,
    image: HomeStock,
    address: '456 Bayfront Dr',
    city: 'Venice, FL',
    price: '$1,600,000',
    beds: 5,
    baths: 4,
    badges: ['Pending'],  // Example badge
    listingUrl: ""
  },
];

const ListingsPage: React.FC = () => {

  const [visibleCount, setVisibleCount] = useState(8);

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const visibleListings = listings.slice(0, visibleCount);
  const hasMore = visibleCount < listings.length;

  return (
    <>
    <section className='listing-page-hero'>
      <img src={ListingHero} alt="Listing Hero" className='listing-page-hero-image' />
      <h6 className='listing-page-subtitle'><span className='dash-span'>--</span>Find Your Dream Home<span className='dash-span'>--</span></h6>
      <h2 className='listing-page-header'>Our Listings</h2>
      </section>
      <section className='listing-page-container'>
       
        {visibleListings.map(listing => (
          <div className='listing-page-card' key={listing.id}>
            <div className='listing-page-image-container'>
              <a href={listing.listingUrl} target="_blank" rel="noopener noreferrer">
                <img src={listing.image} alt={listing.address} className='listing-page-image' />
                <div className='listing-image-overlay'>
                  <button className='listing-page-overlay-button'>
                    Check out this home <img src={ArrowRight} />
                  </button>
                </div>
              </a>

              {listing.badges.length > 0 && (
                <div className='listing-page-badges'>
                  {listing.badges.map((badge, index) => (
                    <span className='listing-page-badge' key={index}>{badge}</span>
                  ))}
                </div>
              )}
            </div>
            <div className='listing-page-details'>
              <h3 className='listing-page-address'>{listing.address}</h3>
              <p className='listing-page-city'>{listing.city}</p>
              <p className='listing-page-price'>{listing.price}</p>
              <p className='listing-page-beds-baths'>
                <img src={Bed} alt="bed icon" />
                <span>{listing.beds} Bedrooms</span>
                <span className='spacing'></span>
                <img src={Bath} alt="bath icon" />
                <span>{listing.baths} Bathrooms</span>
              </p>
            </div>
          </div>
        ))}

        {hasMore && (
          <div className="view-more-wrapper">
            <button onClick={handleViewMore} className='view-more-button'>
              View More <img src={ArrowRight} />
            </button>
          </div>
        )}
      </section>

      <ContactForm />

      <Footer />
    </>
  )
}

export default ListingsPage;