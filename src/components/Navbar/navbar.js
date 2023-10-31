import React from 'react';
import { Link } from "react-router-dom";

import logo from './Images/logo.svg'

import "./navbar.css";

export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-home">
                        <img src={logo} alt="Email Icon" className="logo"/>
                        <div>phil.daniel</div>
                    </Link>

                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links">
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href={process.env.PUBLIC_URL + "/CV.pdf"} className="nav-links" target="_blank" rel="noopener noreferrer">
                                CV
                            </a> 
                        </li>
                    </ul>
                </div>
            </nav>
        </>);
}