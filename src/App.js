// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.js";
import ArtistInput from "./components/ArtistInput.js";
import Loading from "./components/Loading.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ArtistInput" element={<ArtistInput />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </Router>
  );
}

export default App;
