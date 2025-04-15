import HomeStock from '../assets/HouseStock.jpg'
import '../styles/Listings.css'
import SaleHouse from '../assets/SaleHouse.png'
import Bed from '../assets/Bed.png'
import Bath from '../assets/Bath.svg'
import ArrowRight from '../assets/ArrowRight.png'



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
];

const Listings: React.FC = () => {

  return (
    <section className='new-listings-container'>
      <div className='new-listings-header'>
        <h2 className='new-listings-title'>Newest Listings</h2>
      </div>
      {listings.map(listing => (
        <div className='listing-card' key={listing.id}>
          <div className='listing-image-container'>
            <a href={listing.listingUrl} target="_blank" rel="noopener noreferrer">
              <img src={listing.image} alt={listing.address} className='listing-image' />
              <div className='listing-image-overlay'><button className='overlay-button'>Check out this home <img src={ArrowRight} /></button></div>
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
              <img src={Bed} alt="bed icon" />
              <span>{listing.beds} Bedrooms</span>
              <span className='spacing'></span>
              <img src={Bath} alt="bath icon" />
              <span>{listing.baths} Bathrooms</span>
            </p>
          </div>
        </div>
      ))}

     
        <a href="/listings" className='view-all-button'>View All Listings<img src={ArrowRight} /></a>
     
    </section>
  )
}

export default Listings;