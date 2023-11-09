import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import './projectpages.css'; 
import githubIcon from './Images/github.svg'

export default function ProjectPage() {
    const { id } = useParams(); 
    const projects = {
        '1': {
            title: "Placeholder",
            image: "../Images/placeholder.png",
            description: "Placeholder",
            link: "Placeholder",
            additional: "Placeholder",
        },
        '2': {
            title: "Placeholder",
            image: "../Images/placeholder.png",
            description: "Placeholder",
            link: "Placeholder",
            additional: "Placeholder",
        },
        "Scotland-Yard": {
            title: "Scotland Yard",
            image: "../Images/placeholder.png",
            description: "Modelled the game mechanics of the popular board game Scotland Yard, using a skeleton written in Java as part of a pair programming coursework. Used the strategy pattern to implement an AI for both teams, using Minimax with Dijkstra's shortest path algorithm as an example heuristic. Streamlined the runtime using alpha-beta pruning with weights, and used low coupled classing, allowing for testing of each class independent of recursive calls from the Minimax implementation.",
            link: "",
            additional: "Technologies Used: Java, Guava Graphs",
        }
    };

    if (id && projects[id] !== undefined) {
        const toRender = projects[id];
        return (
            <div className="project-content">
                <Link to="/Projects" className="back">Return to Projects</Link>
                <h1 className="project-title">{toRender.title}</h1>
                <img src={toRender.image} alt={toRender.title} className="project-image" />
                <p className="project-desc">{toRender.description}</p>
                <a className="contact-links" href={toRender.link}>
                    <div>
                        <img src={githubIcon} alt="Github Icon" class="contact-image"/>
                    </div>
                    <div>
                    View On GitHub
                    </div>
                </a>
                <p className="project-additional">{toRender.additional}</p>
            </div>
        );
    } else {
        return <Navigate to={'/error-not-found'} />;
    }
}