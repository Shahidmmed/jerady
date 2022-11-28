import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Uncut from "./pages/Uncut/Uncut";
import Bethniel from "./pages/Work/Bethniel";
import Sapphire from "./pages/Work/Sapphire";
import Spayces from "./pages/Work/Spayces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/casestudy/spayces" element={<Spayces />} />
          <Route path="/casestudy/bethniel" element={<Bethniel />} />
          <Route path="/casestudy/saphhire" element={<Sapphire />} />
          <Route path="/uncut" element={<Uncut />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
