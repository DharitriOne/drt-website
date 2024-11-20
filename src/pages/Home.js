// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FeaturesSection />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Home;
