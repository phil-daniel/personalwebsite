import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Copyright from "./components/Copyright/copyright"
import Contact from "./components/Contact/contact"
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" />
        </Routes>
      </div>
      <Contact />
      <Copyright />
    </>
  )
}

export default App
