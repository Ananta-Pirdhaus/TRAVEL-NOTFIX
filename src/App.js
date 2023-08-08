import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Routes/about";
import HomeRoutes from "./Pages/homePages";
import Service from "./Routes/service";
import Contact from "./Routes/contact";
import PaketIdjen from "./Routes/paket"; // Rename the component to start with an uppercase letter

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoutes />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Paket/:slug" element={<PaketIdjen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
