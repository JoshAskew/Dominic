import { useRef } from 'react';
import '../styles/Testimonials.css';
import ControlsLeft from '../assets/ControlsLeft.png';
import ControlsRight from '../assets/ControlsRight.png';
import Stars from '../assets/Stars.png';

const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.firstElementChild?.clientWidth || 0;
        const scrollAmount = cardWidth * 3 + 64; // 3 cards + 2 gaps (32px * 2)
        container.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className='testimonials-container'>
            <div className='testimonials-header'>
                <h6 className='testimonials-subtitle'>What Our Clients Say</h6>
                <h2 className='testimonials-title'>Testimonials</h2>
            </div>
            <div className="testimonials-slider">
                <button className="slider-btn left" onClick={() => scroll('left')}>
                    <img src={ControlsLeft} alt="Scroll Left" />
                </button>
                <div className='testimonials-cards' ref={scrollRef}>
                    <div className='testimonial-card'>
                        <img src={Stars} alt="Stars" className='stars' />
                        <p className='testimonial-text'>"Domanic was amazing! He helped us find our dream home and made the process so easy."</p>
                        <p className='testimonial-author'>- Sarah J.</p>
                    </div>
                    <div className='testimonial-card'>
                    <img src={Stars} alt="Stars" className='stars' />
                        <p className='testimonial-text'>"I couldn't have asked for a better realtor. Highly recommend!"</p>
                        <p className='testimonial-author'>- Mike T.</p>
                    </div>
                    <div className='testimonial-card'>
                    <img src={Stars} alt="Stars" className='stars' />
                        <p className='testimonial-text'>"Professional, knowledgeable, and always available. A true gem in the real estate world!"</p>
                        <p className='testimonial-author'>- Lisa K.</p>
                    </div>
                    <div className='testimonial-card'>
                    <img src={Stars} alt="Stars" className='stars' />
                        <p className='testimonial-text'>"Domanic made selling our home a breeze. We got top dollar!"</p>
                        <p className='testimonial-author'>- John D.</p>
                    </div>
                </div>
                <button className="slider-btn right" onClick={() => scroll('right')}>
                    <img src={ControlsRight} alt="Scroll Right" />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
