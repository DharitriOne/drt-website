// src/components/FeaturesSection.js
import React from 'react';
import '../styles/FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <h2>Our Key Features</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <h3>Sustainability</h3>
                    <p>Promoting eco-friendly practices for long-term growth.</p>
                </div>
                <div className="feature-card">
                    <h3>Secure Transactions</h3>
                    <p>Using blockchain technology to ensure transparency.</p>
                </div>
                <div className="feature-card">
                    <h3>Community Support</h3>
                    <p>Empowering communities with accessible resources.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
