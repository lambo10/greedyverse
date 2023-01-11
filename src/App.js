import "./App.css";
import Home from "./home/home.js";
import React from "react";
import Presale from "./components/presale/Presale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
