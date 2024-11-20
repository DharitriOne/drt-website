// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Dharitri.svg';
import '../styles/footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={logoImage} alt="Dharitri Logo" width="200px" />
                </div>

                <div className="footer-links-section">
                    <div className="footer-column">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/careers">Careers</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <Link to="/help">Help Center</Link>
                        <Link to="/community">Community</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/support">Support</Link>
                    </div>
                </div>

                <div className="footer-social-section">
                    <h4>Follow Us</h4>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Dharitri Org. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
