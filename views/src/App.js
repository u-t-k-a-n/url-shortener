import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";
import "./App.css";


function App() {

  return (
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:shortUrl" element={<HandleRedirect />} />
          </Routes>
        </Router>
      </div >
  );
}

export default App;
