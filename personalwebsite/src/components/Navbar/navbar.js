import React from 'react';
import { Link } from "react-router-dom";

import "./navbar.css"
import logo from "./picture.png"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">
            <img src={logo} alt="logo" />
        </Link>
        <ul>
            <Link to="/">
                Home
            </Link>
            <Link to="/projects">
                Projects
            </Link>
            <Link to="/cv.pdf">
                CV
            </Link> 
        </ul>
    </nav>;
}