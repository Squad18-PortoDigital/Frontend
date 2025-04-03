import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
// import Login from "./Login";
import "../styles/Main.css";

export default function Main() {
  return (
    <>
      <main>
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </>
  );
}