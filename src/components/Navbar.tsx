import React from 'react';
import '../styles/Navbar.css';
import ArrowRight from '../assets/ArrowRightBlack.png';

const Navbar: React.FC = () => {
    return (

        <nav>

            <section className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='nav-header'>Domanic Calamese</h1>
                </div>
                <ul className='navbar-links'>
                    <li className='nav-li'><a href="/">HOME</a></li>
                    <li className='nav-li'><a href="#">ABOUT</a></li>
                    <li className='nav-li'><a href="#">SERVICES</a></li>
                    <li className='nav-li'><a href="#">CONTACT</a></li>
                    <li className='nav-li'><a href="/listings">LISTINGS</a></li>
                </ul>
                <div className='navbar-buttons'>
                    <button className='navbar-button'>CONTACT<img src={ArrowRight}></img></button>
                </div>
            </section>

        </nav>
    )
}
export default Navbar;

