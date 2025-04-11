import HomeStock from '../assets/HouseStock.jpg'
import '../styles/Listings.css'


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
];

const Listings: React.FC = () => {

  return (
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
  )
}

export default Listings;