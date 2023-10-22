import React from 'react';
import { Link } from "react-router-dom";

import "./navbar.css";
import logo from "./picture.png";

export default function Navbar() {
    return <div>
            <nav className="nav">
            <Link to="/"><em>phil</em><strong>Daniel</strong></Link>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/cv.pdf">CV</Link> 
            </ul>
        </nav>
    </div>;
}