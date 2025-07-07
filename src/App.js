// src/App.js
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Men    from "./Pages/Men/Men.jsx";
import Checkout from "./Pages/Checkout";
import Confirmation from "./Pages/Confirmation";
import Kids  from "./Pages/Kids/Kids.jsx";
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
          {/* men + type page */}
          <Route path="/men/:type" element={<Men />} />
          <Route path="/kids"       element={<Kids />} />
          <Route path="/kids/:type" element={<Kids />} />
          <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/women" element={<Women />} />
          <Route path="/sales" element={<Sales/>}/>
          
        </Routes>
      </>
    </BrowserRouter>
  );
}
