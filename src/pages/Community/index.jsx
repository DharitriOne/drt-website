import React from 'react';
import HeroSection from '../components/About/HeroSection';
import MissionSection from '../components/About/MissionSection';
import VisionSection from '../components/About/VisionSection';
import HistorySection from '../components/About/HistorySection';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <HeroSection />
            <MissionSection />
            <VisionSection />
            <HistorySection />
        </div>
    );
};

export default About;
