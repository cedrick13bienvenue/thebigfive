import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ElabChallenges from "./components/ElabChallenges";
import Archive from "./components/Archive";
import Prototype from "./components/Prototype";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team" element={<ElabChallenges />} />
        <Route path="/projects" element={<Archive />} />
        <Route path="/resources" element={<Prototype />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
