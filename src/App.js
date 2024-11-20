import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import CardComponent from './components/CardComponent';
import Footer from './components/Footer';
import './App.css';
import Individuals from './pages/Individuals';
import GetStarted from './pages/Individuals/GetStarted'
// import Home from './pages/Home';
// import DropdownMenu from './components/DropdownMenu';

const App = () => {
    const cardData = [
        {
            imageSrc: 'path-to-image1.jpg',
            title: 'Card Title 1',
            description: 'This is a description for card 1.',
            buttonText: 'Learn More',
        },
        {
            imageSrc: 'path-to-image2.jpg',
            title: 'Card Title 2',
            description: 'This is a description for card 2.',
            buttonText: 'Learn More',
        },
        {
            imageSrc: 'path-to-image3.jpg',
            title: 'Card Title 3',
            description: 'This is a description for card 3.',
            buttonText: 'Learn More',
        },
    ];

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="../src/pages/Individuals/index.jsx " element={<Individuals />} />
                <Route path="./pages/Individuals/GetStarted.js" element={<GetStarted />} />
            </Routes>
            <HeroSection />
            <FeaturesSection />
            <Testimonials />
            <CallToAction />
            {/* <DropdownMenu /> */}
            <div className="card-container">
                {cardData.map((card, index) => (
                    <CardComponent
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        description={card.description}
                        buttonText={card.buttonText}
                    />
                ))}
            </div>
            <Footer />
        </Router>
    );
};

export default App;
