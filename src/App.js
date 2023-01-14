import "./App.css";
<<<<<<< HEAD
import Home from "./home/Home.js";
=======
import Home from "./home/home.js";
>>>>>>> ad48899e29989a914c14d08b768d41331a47fa18
import React from "react";
import Presale from "./components/presale/Presale";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Error from "./components/error/Error";
<<<<<<< HEAD

=======
>>>>>>> ad48899e29989a914c14d08b768d41331a47fa18
function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
