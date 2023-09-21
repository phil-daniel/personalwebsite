import React from 'react';

import "./contact.css";

export default function Contact() {
    return <section class="Contact-Section">
        <div class="Contact-Me">Contact me:</div>
        <ul class="Contact-List">
            <li class="Contact-Element">
                <a class="Contact-Link" href="mailto:phillip.s.w.daniel@gmail.com">Email</a>
            </li>
            <li class="Contact-Element">
                <a class="Contact-Link" href="https://github.com/phillip2654">Github</a>
            </li>
            <li class="Contact-Element">
                <a class="Contact-Link" href="https://www.linkedin.com/in/phillip-daniel/">Linkedin</a>
            </li>
        </ul>
    </section>;
}