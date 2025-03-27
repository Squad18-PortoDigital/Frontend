import { useState } from "react";
import IconHeaderJnunes from "../images/logo-header-jotanunes.png";
import RetanguloImgHeader from "../images/retangulo-img-header.png";
import "../styles/Header.css";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
      <header className="header">
        {/* <div className="icon-jnunes">
          <img src={IconHeaderJnunes} alt="IconJnunes" />
        </div> */}
        <div className="BoxIcon-jnunes">
          <img className="retangulo" src={RetanguloImgHeader} alt="Retangulo" />
          <img className="icon" src={IconHeaderJnunes} alt="IconJnunes" />
        </div>
        {/* <div className="t-r" /> */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
      </header>
    </>
  );
}