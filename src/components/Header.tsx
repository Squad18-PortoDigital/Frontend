import { useState } from "react";
import IconHeaderJnunes from "../images/logo-header-jotanunes.png";
import RetanguloImgHeader from "../images/retangulo-img-header.png";
import "../styles/Header.css";
import Sidebar from "./Sidebar";
import { useAtom } from "jotai";
import { SidebarGestorSet, StateLogin, OpenSidebarGestor } from "../utils/Globals.utils";
import { useNavigate } from "react-router-dom";
// import SidebarGestorComponente from "./SidebarGestor";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  // const [isSidebarOpenGestor, setSidebarOpenGestor] = useState(false);
  const [SidebarGestor, ] = useAtom(SidebarGestorSet);
  const [isLogged, ] = useAtom(StateLogin);
  const [, setOpenSidebarGestor] = useAtom(OpenSidebarGestor);

  const navigate = useNavigate();
  
  return (
    <>
      <header className="header">
        <div className="BoxIcon-jnunes" onClick={() => {
          // isLogged ? window.location.href = "/dashboard" : window.location.href = "/";
          isLogged ? navigate("/dashboard/", {replace: true}) : navigate("/", {replace: true});
        }}>
          <img className="retangulo" src={RetanguloImgHeader} alt="Retangulo" />
          <img className="icon" src={IconHeaderJnunes} alt="IconJnunes" />
        </div>
        {/* <SidebarGestorComponente isOpenSidebarGestor={isSidebarOpenGestor} onCloseSidebarGestor={() => setSidebarOpenGestor(false)} /> */}
        <Sidebar isOpenSidebar={isSidebarOpen} onCloseSidebar={() => setSidebarOpen(false)} />
        {SidebarGestor ? (
          <>
            {/* <SidebarGestorComponente isOpenSidebarGestor={isSidebarOpenGestor} onCloseSidebarGestor={() => setSidebarOpenGestor(false)} /> */}
            <button className="menu-btn" onClick={() => setOpenSidebarGestor(true)}>☰</button>
          </>
        ) : (
          <>
            <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button>
          </>
        )}
        {/* <button className="menu-btn" onClick={() => setSidebarOpen(true)}>☰</button> */}
      </header>
    </>
  );
}