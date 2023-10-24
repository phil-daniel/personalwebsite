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
            <li className="card-element">
                <Link className="card-link" to={content.path}>
                    <figure className="card-figure" data-category={content.label}>
                        <img className="card-image" src={content.image} alt={content.title}/>
                    </figure>
                    <div>
                        <h5>{content.text}</h5>
                    </div>
                </Link>
            </li>
        );
    }
}