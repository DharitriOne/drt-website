import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Import the CSS file
import logoImage from '../assets/images/Dharitri.svg';

const Header = () => {
    const [individualsDropdown, setIndividualsDropdown] = useState(false);
    const [farmerDropdown, setFarmerDropdown] = useState(false);
    const [accountabilityDropdown, setAccountabilityDropdown] = useState(false);
    const [ecosystemDropdown, setEcosystemDropdown] = useState(false);
    const [communityDropdown, setCommunityDropdown] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);

    const handleMouseEnter = (setDropdown) => () => setDropdown(true);
    const handleMouseLeave = (setDropdown) => () => setDropdown(false);

    return (
        <nav className="header">
            <div className="header-logo">
                <Link to="../App.js">
                    <img src={logoImage} alt="Dharitri Logo" width="200px"/>
                </Link>
            </div>

            <div className="nav-menu">
                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setIndividualsDropdown)}
                    onMouseLeave={handleMouseLeave(setIndividualsDropdown)}
                >
                    <span>Individuals </span>
                    {individualsDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="../pages/Individuals/GetStarted.js">Get Started</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/moa-token">The MOA Token</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/on-chain-2fa">On-chain 2FA</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/staking">Staking</Link></div>
                            <div className="dropdown-item"><Link to="/individuals/sustainability">Sustainability</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setFarmerDropdown)}
                    onMouseLeave={handleMouseLeave(setFarmerDropdown)}
                >
                    <span>Farmer </span>
                    {farmerDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/farmer/discover">Discover</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/projects">Projects</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/partners">Partners</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/validators">Validators</Link></div>
                            <div className="dropdown-item"><Link to="/farmer/service-providers">Service Providers</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setAccountabilityDropdown)}
                    onMouseLeave={handleMouseLeave(setAccountabilityDropdown)}
                >
                    <span>Accountability </span>
                    {accountabilityDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/accountability/get-started">Get Started</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/moa-token">The MOA Token</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/on-chain-2fa">On-chain 2FA</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/staking">Staking</Link></div>
                            <div className="dropdown-item"><Link to="/accountability/sustainability">Sustainability</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setEcosystemDropdown)}
                    onMouseLeave={handleMouseLeave(setEcosystemDropdown)}
                >
                    <span>Ecosystem </span>
                    {ecosystemDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/ecosystem/discover">Discover</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/projects">Projects</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/partners">Partners</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/validators">Validators</Link></div>
                            <div className="dropdown-item"><Link to="/ecosystem/service-providers">Service Providers</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setCommunityDropdown)}
                    onMouseLeave={handleMouseLeave(setCommunityDropdown)}
                >
                    <span>Community </span>
                    {communityDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/community/events-calendar">Events Calendar</Link></div>
                            <div className="dropdown-item"><Link to="/community/governance">Governance</Link></div>
                            <div className="dropdown-item"><Link to="/community/ambassador-program">Ambassador Program</Link></div>
                            <div className="dropdown-item"><Link to="/community/faq">FAQ</Link></div>
                            <div className="dropdown-item"><Link to="/community/blog">Blog</Link></div>
                        </div>
                    )}
                </div>

                <div
                    className="nav-item"
                    onMouseEnter={handleMouseEnter(setAboutDropdown)}
                    onMouseLeave={handleMouseLeave(setAboutDropdown)}
                >
                    <span>About </span>
                    {aboutDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item"><Link to="/about/dharitri-to-Dharitri">From Dharitri to Dharitri</Link></div>
                            <div className="dropdown-item"><Link to="/about/media-kit">Media Kit</Link></div>
                            <div className="dropdown-item"><Link to="/about/careers">Careers</Link></div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
