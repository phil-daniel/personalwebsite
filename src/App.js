import React from 'react';

import Navbar from "./components/Navbar/navbar";
import Copyright from "./components/Copyright/copyright"
import Contact from "./components/Contact/contact"
import SitemapButton from "./components/Sitemap/sitemap"

import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import Sitemap from "./pages/Sitemap/sitemap"
import NotFound from "./pages/NotFound/notfound"


import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>s
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/cv" />
          <Route path={'*'} element={<NotFound/>}/>
        </Routes>
      </div>
      <Contact />
      <Copyright />
      <SitemapButton />
    </>
  )
}

export default App