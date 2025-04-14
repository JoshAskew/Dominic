import React from 'react';
import '../styles/ContactForm.css'; // optional for styling
import ArrowRight from '../assets/ArrowRightBlack.png'

const ContactForm: React.FC = () => {
  return (
    <>
    <form
      action="https://formsubmit.co/your@email.com"
      method="POST"
      className="contact-form"
    >
      <h6 className='contact-subtitle'>Let's talk</h6>
      <h2 className='contact-title'>Get in Touch</h2>

      {/* Anti-spam */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

      <input type="text" name="name" placeholder="Full Name" required />
      <input type="tel" name="phone" placeholder="Phone Number" required/>
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />

      <button type="submit" className='submit'>Submit <img src= {ArrowRight} /></button>
    </form>
    </>
  );
};

export default ContactForm;