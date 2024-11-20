// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-heading">Explore the Future of Blockchain</h1>
                    <p className="hero-subheading">
                        Empowering the next generation of decentralized applications with cutting-edge technology.
                    </p>
                    <Link to="/learn-more" className="hero-button">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
