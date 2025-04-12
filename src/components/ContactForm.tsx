import React from 'react';
import '../styles/ContactForm.css'; // optional for styling

const ContactForm: React.FC = () => {
  return (
    <form
      action="https://formsubmit.co/your@email.com"
      method="POST"
      className="contact-form"
    >
      <h3>Get In Touch</h3>

      {/* Anti-spam */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <input type="tel" name="phone" placeholder="Phone Number (optional)" />
      <textarea name="message" placeholder="Your Message" required />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;