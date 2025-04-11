import Award from '../assets/Award.png'
import '../styles/Accolades.css'



const Accolades: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default Accolades
