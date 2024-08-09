import React, { useEffect, useState } from "react";
import "./App.css";
import Page from "./pages/Page";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
