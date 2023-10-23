import React from 'react';

import "./home.css";

export default function Home() {
    document.title = 'Phil Daniel | Home';
    return <div class="Home-Content">
        <h1 className="hello">Hi, welcome to my website. I'm Phillip.</h1>
        <p className="main-text">I am a Second Year student at the <a href="https://www.bristol.ac.uk" className="link">University of Bristol</a>, studying Computer Science (BSc), graduating in 2025.
             I have knowedge in an assortment of language, including C, Python, Haskell, Lua, Go and others,
             and I am currently learning C++. I am constantly looking for ways to improve my programming skills and am also actively looking
             for a summer internship which could help me nurture my interests through experience in the enterprise work,
             if you have any possibilities, please feel free to contact me below, or have a look through <a href="./projects" className="link">my projects</a>!
        </p>
        <p className="below-text">Outside of Computer Science I enjoy travelling, with some of my favourite places being Shenzhen, Hongkong & Prague.
             you can see some of my favourite photos <a href="" className="link">here</a>!</p>
    </div>
}
//Link to travel photos?