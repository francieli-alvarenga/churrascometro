import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import HomePage from "./pages/HomePage";
import Result from "./pages/Results";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/results" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
