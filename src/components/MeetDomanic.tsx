import HeadShot from '../assets/DomanicHeadShot.png';
import '../styles/MeetDomanic.css';


const MeetDomanic: React.FC = () => {
  return (

    <>
      <section className='meet-your-realtor-container'>
        <div className='meet-your-realtor-left'>
        <img src={HeadShot} alt="Domanic Calamese Headshot" className='meet-your-realtor-image' />
        </div>

        <div className='meet-your-realtor-right'>
        <h5 className='meet-your-realtor-title'>Meet Your Realtor</h5>
          <h2 className='meet-your-realtor-name'>Domanic Calamese</h2>
          <p className='meet-your-realtor-description'>
          Lorem ipsum dolor sit amet consectetur. Aliquet nam purus pellentesque lacus donec arcu mi. Varius faucibus sociis arcu tortor mauris. Massa augue dignissim fermentum magna viverra mattis. Pulvinar tempus suspendisse sit ipsum lectus lectus. Tortor blandit eget risus rutrum convallis vitae non. Rhoncus facilisis tellus non in aliquam dolor ipsum cursus gravida. In odio sit ac aliquam lacus. Sagittis scelerisque turpis et nunc et vitae nunc. Aenean nunc enim lacinia sit in.
          Velit tellus interdum urna consequat nunc eget. Suspendisse in posuere quam risus sit pulvinar sit. Proin amet imperdiet rutrum integer bibendum libero lectus ullamcorper eget. Nibh sollicitudin sem nibh ac at sodales ut. Ultrices mattis feugiat semper quisque facilisis lorem enim convallis. Pellentesque mauris at tempus convallis enim. Eget netus tristique id nullam. 
          </p>
         
        </div>

      </section>
    </>
  )
}
export default MeetDomanic;