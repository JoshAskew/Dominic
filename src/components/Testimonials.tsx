import '../styles/Testimonials.css';


const Testimonials: React.FC = () => {
    return (
        <>
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
}
export default Testimonials;