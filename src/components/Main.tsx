import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
// import Login from "./Login";
import "../styles/Main.css";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function Main() {

  return (
    <>
      <main>
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}