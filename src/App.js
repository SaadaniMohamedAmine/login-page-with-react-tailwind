import React from "react";
import {Routes,Route,BrowserRouter} from 'react-router-dom' ;
import Contact from "./components/Contact";
import Home from "./components/Home";
import Contact1 from "./components/Contact1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact1" element={<Contact1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
