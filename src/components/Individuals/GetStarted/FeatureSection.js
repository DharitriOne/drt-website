// src/components/FeatureSection/FeatureSection.js
import React from 'react';
import './FeatureSection.css';

const features = [
    { title: "Secure & Scalable", description: "Built for high performance and security." },
    { title: "Easy to Use", description: "Intuitive interface and seamless onboarding." },
    { title: "Advanced Features", description: "Experience cutting-edge blockchain features." }
];

const FeatureSection = () => {
    return (
        <section className="feature-section">
            <h2>Why Choose Dharitri?</h2>
            <div className="feature-cards">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;
