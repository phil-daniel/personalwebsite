import React from 'react';

import './notfound.css';

export default function Home() {
    {document.title = 'Phil Daniel | Not Found';}
    return (<>
        <div className="notfound-content">
            <h1>
                Page does not exist.
            </h1>
        </div>
    </>);
}