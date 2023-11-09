import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import './projectpages.css'; 

export default function ProjectPage() {
    const { id } = useParams(); 
    const projects = {
        '1': {
            title: "Placeholder",
            image: "Placeholder",
            description: "Placeholder",
            link: "Placeholder",
            additional: "Placeholder",
        },
        '2': {
            title: "Placeholder",
            image: "Placeholder",
            description: "Placeholder",
            link: "Placeholder",
            additional: "Placeholder",
        },
    };

    if (id && projects[id] !== undefined) {
        const toRender = projects[id];
        return (
            <div>
                <Link to="/Projects" className="back">Back</Link>
                <h1>{toRender.title}</h1>
            </div>
        );
    } else {
        return <Navigate to={'/error-not-found'} />;
    }
}