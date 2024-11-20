import React from 'react';
import CardComponent from '../components/CardComponent';
import '../styles/Ecosystem.css';


const Ecosystem = () => {
    return (
        <div className="ecosystem-page">
            <header className="ecosystem-header">
                <h1>Ecosystem</h1>
                <p>Explore our diverse ecosystem of projects and partners that drive innovation and growth.</p>
            </header>

            <section className="ecosystem-projects">
                <h2>Projects</h2>
                <div className="card-grid">
                    <CardComponent title="Project A" description="Description for Project A." />
                    <CardComponent title="Project B" description="Description for Project B." />
                    <CardComponent title="Project C" description="Description for Project C." />
                    {/* Add more CardComponents as needed */}
                </div>
            </section>

            <section className="ecosystem-partners">
                <h2>Partners</h2>
                <div className="card-grid">
                    <CardComponent title="Partner X" description="Description for Partner X." />
                    <CardComponent title="Partner Y" description="Description for Partner Y." />
                    <CardComponent title="Partner Z" description="Description for Partner Z." />
                    {/* Add more CardComponents as needed */}
                </div>
            </section>

            <section className="ecosystem-charts">
                <h2>Data Visualizations</h2>
                <div className="charts-container">
                    <div className="chart-placeholder">Chart 1 - Placeholder</div>
                    <div className="chart-placeholder">Chart 2 - Placeholder</div>
                    {/* Add actual chart components or placeholders as needed */}
                </div>
            </section>
        </div>
    );
};

export default Ecosystem;
