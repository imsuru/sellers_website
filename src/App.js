import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seller from "./components/Seller";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Seller />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
