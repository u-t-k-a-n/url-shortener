import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import HandleRedirect from "./components/HandleRedirect";

function App() {

  return (
    <div style={{ backgroundColor: "#212529" }}>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:shortUrl" element={<HandleRedirect />} />
          </Routes>
        </Router>
      </div >
    </div>
  );
}

export default App;
