// src/App.js
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Men    from "./Pages/Men/Men.jsx";
import Women from "./Pages/Women/Women.jsx";
import Home from "./Pages/Home/Home.jsx";
import Sales from "./Pages/Sales/Sales.jsx";

/* placeholder for now */

export default function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <h2 className="Title">Sol &amp; You</h2>
          <Navbar />
        </header>

        {/* page viewport */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/sales" element={<Sales/>}/>
          
        </Routes>
      </>
    </BrowserRouter>
  );
}
