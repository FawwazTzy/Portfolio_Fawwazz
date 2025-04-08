import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
        </div>
  );
};

export default App;
