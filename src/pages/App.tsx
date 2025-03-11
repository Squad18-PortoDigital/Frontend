import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Home from "./Home/Home";
import "../styles/App.css";
import Sobre from "./Sobre/Sobre";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Header />
          <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
