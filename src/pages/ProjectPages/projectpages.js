import React from 'react';
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import './projectpages.css'; 
import githubIcon from './Images/github.svg'

export default function ProjectPage() {
    const { id } = useParams(); 
    const projects = {
        'game-of-life': {
            title: "Parallel and Distribution Implementations of Conway's Game of Life",
            image: "../Images/gol.png",
            description: "Parallel and Distributed implementations of Conway's Game Of Life using Golang, with corresponding benchmarks showing performance differences between versions, including testing the usage of channels vs pure memory sharing (using traditional synchronisation mechanisms such as mutex locks, semaphores and condition variabes",
            link: "",
            additional: "Technologies Used: GoLang, AWS",
        },
        'pgm-image': {
            title: "PGM Image Compression and Decompression",
            image: "../Images/pgmimage.png",
            description: "A program written in C to convert a PGM image into a ‘.sketch’ file, consisting of the data of every pixel, then render the file using SDL2, and also convert from the sketch file to a PGM image, using two-dimensional run length encoding for lossless compression.",
            link: "Placeholder",
            additional: "Technologies Used: C, SDL2, Guava Graphs",
        },
        "scotland-yard": {
            title: "Scotland Yard",
            image: "../Images/scotlandyard.png",
            description: "Modelled the game mechanics of the popular board game Scotland Yard, using a skeleton written in Java as part of a pair programming coursework. Used the strategy pattern to implement an AI for both teams, using Minimax with Dijkstra's shortest path algorithm as an example heuristic. Streamlined the runtime using alpha-beta pruning with weights, and used low coupled classing, allowing for testing of each class independent of recursive calls from the Minimax implementation.",
            link: "",
            additional: "Technologies Used: Java, Guava Graphs",
        },
        "website": {
            title: "Portfolio Website",
            image: "../Images/website.png",
            description: "A website I built using React.js and CSS to improve my frontend development skills and showcase some of the projects that I have done in the past.",
            link: "https://github.com/phil-daniel/personalwebsite",
            additional: "Technologies Used: React.js, CSS"
        },
        "room-mapper": {
            title: "Room Mapper",
            image: "../Images/roommapper.png",
            description: "A room mapper product, which used a LiDAR sensor in combination with a Raspberry Pi to, quickly scan a room and produce a floor plan, using python, php and HTML. Also has a web interface allowing for the user to control the settings of the product and add tags to the scan to note furniture. Used python control the LiDAR, interpret calculated distances, and generate a jpeg image floorplan of the room from a NumPy array containing the calculations. The report for this project can be found in the github link below.",
            link: "https://github.com/phil-daniel/Room-Mapper",
            additional: "Technologies Used: Python, php, HTML"
        },
        "accomodation-search": {
            title: "Automated Accomodation Searcher",
            image: "../Images/accomodation.png",
            description: "An automation script to search through popular property renting websites, generating a spreadsheet of properties compatible with inputted requirements (location, number of bedrooms, landlords to avoid, etc).",
            link: "https://github.com/phil-daniel/Automated-Accommodation-Search",
            additional: "Technologies Used: Python, Selenium, openpyxl"
        },
    };

    if (id && projects[id] !== undefined) {
        const toRender = projects[id];
        document.title = "Phil Daniel | " + toRender.title
        let githubLink;
        if (toRender.link == "") {
            githubLink = < ></>
        } else {
            githubLink = <a className="contact-links project-link" href={toRender.link}>
                            <div>
                                <img src={githubIcon} alt="Github Icon" class="contact-image"/>
                            </div>
                            <div>
                            View On GitHub
                            </div>
                        </a>
        }
        return (
            <div className="project-content">
                <Link to="/Projects" className="back">&lt; Return to Projects</Link>
                <h1 className="project-title">{toRender.title}</h1>
                <img src={toRender.image} alt={toRender.title} className="project-image" />
                <p className="project-desc">{toRender.description}</p>
                {githubLink}
                <p className="project-additional">{toRender.additional}</p>
            </div>
        );
    } else {
        return <Navigate to={'/error-not-found'} />;
    }
}