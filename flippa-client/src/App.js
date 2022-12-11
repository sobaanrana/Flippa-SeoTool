import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { AdminPage } from "./pages/AdminPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
