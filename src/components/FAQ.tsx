import { useState } from 'react';
import '../styles/FAQ.css';
import DownArrow from '../assets/DownArrow.png';
import UpArrow from '../assets/UpArrow.png';

const faqs = [
  {
    question: 'What are the best neighborhoods to buy a home in Sarasota?',
    answer:
      'Sarasota offers a variety of neighborhoods to suit different lifestyles. Some of the most sought-after areas include Lakewood Ranch for families, Palmer Ranch for planned communities, Siesta Key for beachfront living, and Downtown Sarasota for walkable urban living.'
  },
  {
    question: 'How close is this property to the beach or waterfront?',
    answer:
      'Many homes in Sarasota are just a short drive from world-class beaches. Siesta Key, Lido Key, and Longboat Key offer beautiful white sand, and properties close to these areas are in high demand.'
  },
  {
    question: 'Are flood zones a concern in Sarasota?',
    answer:
      'Yes, flood zones are a consideration—especially for waterfront or canal-front homes. Sarasota follows FEMA flood zone guidelines, and it’s important to check a property’s zone and insurance requirements before buying.'
  },
  {
    question: 'Is Sarasota a good place for investment properties or vacation rentals?',
    answer:
      'Absolutely. Sarasota is a hot spot for vacation rentals, especially near the beaches. Many investors target short-term rental opportunities in areas like Siesta Key and Lido Key due to strong tourism demand.'
  },
  {
    question: 'What’s the cost of living in Sarasota compared to other parts of Florida?',
    answer:
      'Sarasota’s cost of living is moderate. While housing prices are above average for Florida, residents benefit from no state income tax, and daily expenses like groceries and utilities remain reasonable.'
  },
  {
    question: 'How competitive is the real estate market right now in Sarasota?',
    answer:
      'The market is competitive, especially for homes near the beach or in desirable school districts. Inventory tends to move quickly during peak seasons (winter/spring), so buyers should be prepared to act fast.'
  },
  {
    question: 'Are there any new developments or gated communities being built nearby?',
    answer:
      'Yes! Sarasota and nearby Lakewood Ranch continue to grow with new gated communities, luxury condos, and master-planned developments. Many offer resort-style amenities, golf, and proximity to shopping and dining.'
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="faq-container">
        <h6 className="faq-subtitle">We have answers</h6>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <section className="faq-section">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggle(index)}>
                  <span className='question'>{faq.question}</span>
                  <span className="arrow">
                    <img
                      src={activeIndex === index ? UpArrow : DownArrow}
                      alt={activeIndex === index ? 'Collapse' : 'Expand'}
                      className="arrow-icon"
                    />
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default FAQSection;
