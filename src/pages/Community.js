// src/components/Community.js

import React from 'react';
import EventsCalendar from '../components/EventsCalendar';
import FAQ from '../components/FAQ';
import '../styles/Community.css';

const Community = () => {
    return (
        <div className="community-container">
            <header className="community-header">
                <h1>Join Our Community</h1>
                <p>Stay connected and get involved with our upcoming events and resources.</p>
            </header>

            {/* Events Calendar */}
            <section className="events-calendar-section">
                <h2>Upcoming Events</h2>
                <EventsCalendar />
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <FAQ />
            </section>
        </div>
    );
};

export default Community;
