import React from 'react';

import emailIcon from './Images/email.svg'
import githubIcon from './Images/github.svg'
import linkedinIcon from './Images/linkedin.svg'
import "./contact.css";

export default function Contact() {
    return (
            <>
                <h1 className="contact-heading">Contact me:</h1>
                <nav className="contact">
                    <div className="contact-container">
                        <ul className="contact-menu">
                            <li className="contact-item">
                                <a className="contact-links" href="mailto:phillip.s.w.daniel@gmail.com">
                                    <div>
                                        <img src={emailIcon} alt="Email Icon" class="contact-image"/>
                                    </div>
                                    <div>
                                    Email
                                    </div>
                                </a>
                            </li>
                            <li className="contact-item">
                                <a className="contact-links" href="https://www.linkedin.com/in/phillip-daniel/">
                                    <div>
                                        <img src={linkedinIcon} alt="Linkedin Icon" class="contact-image"/>
                                    </div>
                                    <div>
                                    LinkedIn
                                    </div>
                                </a>
                            </li>
                            <li className="contact-item">
                                <a className="contact-links" href="https://github.com/phillip2654">
                                    <div>
                                        <img src={githubIcon} alt="Github Icon" class="contact-image"/>
                                    </div>
                                    <div>
                                    GitHub
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
    );
}