import React from 'react';

import ProjectCard from "../../components/ProjectCard/projectcard";

import './projects.css';

export default function Projects() {
    {document.title = 'Phil Daniel | Projects';}
    return (<>
        <div className="projects-content">
            <h1>
                Projects
            </h1>
            <h3>
                A selection of some of the things I have worked on in the past!
            </h3>
            <div className="card-wrapper">
                <div className="card-grid">
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Scotland Yard"
                        text = "Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/Scotland-Yard"
                    />
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Placeholder"
                        text = "Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/1"
                    />
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Placeholder"
                        text = "Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/1"
                    />
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Placeholder"
                        text = "Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/1"
                    />
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Placeholder"
                        text = "Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/1"
                    />
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Placeholder"
                        text = "Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/1"
                    />
                    <ProjectCard
                        image = "./Images/placeholder.png"
                        title = "Placeholder"
                        text = "Placeholder text Placeholder text Placeholder text  Placeholder text  Placeholder text "
                        path = "/project/1"
                    />
                </div>
            </div>
        </div>
    </>);
}