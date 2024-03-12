// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.js";
import UserAuth from "./components/UserAuth.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userAuth" element={<UserAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
