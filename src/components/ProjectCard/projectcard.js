import React from 'react';
import { Link } from "react-router-dom";

import './projectcard.css';

export default function Card(content) {
    if (content.empty) {
        return (
            <li>
                <div></div>
            </li>
        );
    } else {
        return (
            <div className="card-element">
                <Link className="card-link" to={content.path}>
                    <img className="card-image" src={content.image} alt={content.title}/>
                    <div className="card-text-content">
                        <h2 className="card-title">{content.title}</h2>
                        <p className="card-text">{content.text}</p>
                    </div>
                </Link>
            </div>
        );
    }
}