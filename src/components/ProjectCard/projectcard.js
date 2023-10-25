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
                    <div>
                        <h2 className="card-title">{content.title}</h2>
                        <h5 className="card-text">{content.text}</h5>
                    </div>
                </Link>
            </div>
        );
    }
}