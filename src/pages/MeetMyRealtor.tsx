import HeadShot from '../assets/DomanicHeadShot.jpg';
import '../styles/MeetDomanic.css';


const MeetMyRealtor: React.FC = () => {
  return (

    <>
      <section className='meet-your-realtor-container' style={
        {marginTop: '100px'}
      }>
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
      </section>
    </>
  )
}
export default MeetMyRealtor;