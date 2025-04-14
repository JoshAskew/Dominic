import '../styles/Footer.css';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <section className="header-container">
                <div className='footer-column'>
                    <h3 className='footer-header'>Domanic Calamese</h3>
                    <p className='footer-text'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet nam purus pellentesque lacus donec arcu mi.
                        Varius faucibus sociis arcu tortor mauris. Massa augue dignissim fermentum magna viverra mattis.
                    </p>
                </div>

                <div className='footer-column'>
                    <h3 className='footer-header'>Quick Links</h3>
                    <div className='footer-text'>
                        <a href="#" className="footer-link">Link 1</a>
                        <a href="#" className="footer-link">Link 2</a>
                        <a href="#" className="footer-link">Link 3</a>
                        <a href="#" className="footer-link">Link 4</a>
                        <a href="#" className="footer-link">Link 5</a>
                    </div>
                </div>

                <div className='footer-column'>
                    <h3 className='footer-header'>Resources</h3>
                    <div className='footer-text'>
                        <a href="#" className="footer-link">Link 1</a>
                        <a href="#" className="footer-link">Link 2</a>
                        <a href="#" className="footer-link">Link 3</a>
                        <a href="#" className="footer-link">Link 4</a>
                        <a href="#" className="footer-link">Link 5</a>
                    </div>
                </div>
                <div className='footer-column'>
                    <h3 className='footer-header'>Contact</h3>
                    <p className='footer-text'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet nam purus pellentesque lacus donec arcu mi.
                        Varius faucibus sociis arcu tortor mauris. Massa augue dignissim fermentum magna viverra mattis.
                    </p>
                </div>
            </section>
            <section className="footer-bottom">
                <div className='footer-bottom-text'>
                    <p>Copyright © 2025 All rights reserved.</p>
                </div>
                </section>
        </>
    );
};

export default Footer;
