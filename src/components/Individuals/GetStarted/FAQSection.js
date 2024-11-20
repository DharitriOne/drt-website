// src/components/FAQSection/FAQSection.js
import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
    { question: "What is Dharitri?", answer: "Dharitri is a scalable, secure blockchain platform." },
    { question: "How do I get started?", answer: "Follow our step-by-step guide to set up your account." },
    { question: "Is there a fee?", answer: "Some transactions may have fees, depending on the activity." }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-items">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                        </div>
                        {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
