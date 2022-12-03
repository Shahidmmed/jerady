import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Uncut from "./pages/Uncut/Uncut";
import Bethniel from "./pages/Work/Bethniel";
import BethnielFinance from "./pages/Work/BethnielFinance";
import Sapphire from "./pages/Work/Sapphire";
import Spayces from "./pages/Work/Spayces";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <ScrollToTop />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/casestudy/spayces" element={<Spayces />} />
          <Route path="/casestudy/bethniel" element={<Bethniel />} />
          <Route path="/casestudy/bethnielfin" element={<BethnielFinance />} />
          <Route path="/casestudy/sapphire" element={<Sapphire />} />
          <Route path="/uncut" element={<Uncut />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
