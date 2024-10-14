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
                        image = "./Images/napari-omnipose.png"
                        title = "Napari Omnipose Image Analysis Tool"
                        text = "A Python-based image analysis tool for epiflorescence microscopy which enables the quantification of fluorescent signals relative to specific cell morphologies."
                        path = "/project/napari-omnipose"
                    />
                    <ProjectCard
                        image = "./Images/website.png"
                        title = "Portfolio Website"
                        text = "A website I built using React.js and CSS to improve my frontend development skills and showcase some of the projects that I have done in the past."
                        path = "/project/website"
                    />
                    <ProjectCard
                        image = "./Images/gol.png"
                        title = "Parallel and Distributed Conway's Game of Life"
                        text = "Parallel and Distributed Implementations of Conway's Game of Life, with corresponding performance benchmarking."
                        path = "/project/game-of-life"
                    />
                    <ProjectCard
                        image = "./Images/accomodation.png"
                        title = "Accomodation Search"
                        text = "An automation script to search through popular property renting websites, generating a spreadsheet of properties compatible with inputted requirements."
                        path = "/project/accomodation-search"
                    />
                    <ProjectCard
                        image = "./Images/scotlandyard.png"
                        title = "Scotland Yard"
                        text = "Modelling the game mechanics of the boardgame Scotland Yard in Java, and creating an opponent AI using Minimax and Dykstra's Shortest Path Algorithm."
                        path = "/project/scotland-yard"
                    />
                    <ProjectCard
                        image = "./Images/pgmimage.png"
                        title = "PGM Image Compression"
                        text = "A program to render and convert between '.sketch' files and .pgm image files, using two-dimensional run length encoding for lossless compression."
                        path = "/project/pgm-image"
                    />
                    <ProjectCard
                        image = "./Images/roommapper.png"
                        title = "Room Mapper Project"
                        text = "A room mapping product, controlled through a website which uses a Raspberry Pi and LiDAR sensor to take measurements of a room."
                        path = "/project/room-mapper"
                    />
                </div>
            </div>
        </div>
    </>);
}