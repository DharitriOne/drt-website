// src/pages/Individuals/GetStarted.js
import React from 'react';
import IntroSection from '../../components/Individuals/GetStarted/IntroSection';
import FeatureSection from '../../components/Individuals/GetStarted/FeatureSection';
import FAQSection from '../../components/Individuals/GetStarted/FAQSection';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <div className="get-started-page">
            <IntroSection />
            <FeatureSection />
            <FAQSection />
        </div>
    );
};

export default GetStarted;
