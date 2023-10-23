import React from 'react';
import { Link } from "react-router-dom";

import "./sitemap.css";

export default function Navbar() {
    return (
        <>
            <div class="sitemap">
                <Link to="/sitemap" className="sitemap-link">
                    Sitemap
                </Link>
            </div>
        </>
    );
}