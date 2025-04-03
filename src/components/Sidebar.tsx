import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { useState } from "react";
import Login from "./Login";

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function Sidebar({ isOpenSidebar, onCloseSidebar }: SidebarProps) {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className={`sidebar ${isOpenSidebar ? "open" : ""}`}>
      <Login isOpenLogin={openLogin} onCloseLogin={() => {setOpenLogin(false)}}/>
      <button className="close-btn" onClick={onCloseSidebar}>×</button>
      <nav>
        <div className="navMobile">
          <Link to="" onClick={() => {
            onCloseSidebar();
            setOpenLogin(true);
          }}>Login</Link>
        </div>
        <div className="navGeral">
          <Link to="/" onClick={onCloseSidebar}>Home</Link>
          <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link>
        </div>
        <div className="navDesktop">
          <Link to="" onClick={() => {
            onCloseSidebar();
            setOpenLogin(true);
          }}>Login</Link>
        </div>
      </nav>
    </div>
  );
}