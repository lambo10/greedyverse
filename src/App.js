import "./App.css";
import Home from "./home/Home.js";
import React from "react";
import Presale from "./components/presale/Presale";
import SeedSale from "./home/SeedSale";
import Dashboard from "./home/DashboardSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Error from "./components/error/Error";
function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<SeedSale />} />
          <Route path="/dashoard" element={<Dashboard />} />
          <Route path="/seedsale" element={<SeedSale />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
