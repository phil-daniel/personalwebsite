import React from 'react';
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
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
    </>
  )
}

export default App
