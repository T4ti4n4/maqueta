import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import MainSection from "./components/MainSection";
import Home from "./components/Home";
import About from "./components/About";

function Page() {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutSection />
    </div>
  );
}

function RouteHome() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Page />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <div>
      <RouteHome />
    </div>
  );
}

export default App;
