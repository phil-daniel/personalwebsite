import React from 'react';
import { Link } from "react-router-dom";

import "./navbar.css";
export default function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-home">
                        phildaniel
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
                            <Link to="/cv.pdf"className="nav-links">
                                CV
                            </Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        </>);
}