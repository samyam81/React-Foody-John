import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUS from "./ContactUS";
import Coffee from "./Coffee";
import Navbar from "./Navbar"
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Supper from "./Supper";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/brunch" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Supper />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
