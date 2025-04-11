import Phone from '../assets/Phone.png'
import Email from '../assets/Email.png'
import Location from '../assets/Location.png'
import '../styles/GetInTouch.css'


const GetInTouch: React.FC = () => {

    return (
        <>
            <section className="icons-container">
                <div className="icons-header">
                    <h2 className="icons-title">Get in Touch</h2>
                </div>
                <div className="icons-content">
                    <div className="icon-item">
                        <img src={Phone} alt="Phone Icon" className="icon-image" />
                        <p className="icon-text">Phone</p>
                        <p className="icon-info">(941) 555-1234</p>
                    </div>
                    <div className="icon-item">
                        <img src={Email} alt="Email Icon" className="icon-image" />
                        <p className="icon-text">Email</p>
                        <p className="icon-info">hello@example.com</p>
                    </div>
                    <div className="icon-item">
                        <img src={Location} alt="Location Icon" className="icon-image" />
                        <p className="icon-text">Stop By</p>
                        <p className="icon-info">123 Main St, Sarasota, FL</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInTouch