import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { createContext, useContext, useEffect, useState } from "react";
import Login from "./Login";
import { StateLogin } from "../models/Login.model";

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function Sidebar({ isOpenSidebar, onCloseSidebar }: SidebarProps) {
  const [openLogin, setOpenLogin] = useState(false);
  const [isLogged, setIsLogged] = useState<boolean>(StateLogin.isLogged);
  const isLoggedCheck = useContext<boolean>(createContext<boolean>(StateLogin.isLogged));

  function logoff() {
    setIsLogged(false);
    localStorage.removeItem("userData");
    window.location.href = "/";
  }

  useEffect(() => {
    setIsLogged(StateLogin.isLogged);
  }, [isLoggedCheck]);

  return (
    <div className={`sidebar ${isOpenSidebar ? "open" : ""}`}>
      {/* <Login isOpenLogin={openLogin} onCloseLogin={() => {setOpenLogin(false)}}/> */}
      <button className="close-btn" onClick={onCloseSidebar}>×</button>
      <nav>
        {isLogged ? (
          <>
            <div className="navGeral">
              <Link to="/dashboard" onClick={onCloseSidebar}>Inicio</Link>
              <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link>
            </div>
            <div className="navMobile">
              <Link to="#" onClick={() => {
                logoff();
              }}>Sair</Link>
            </div>
            <div className="navDesktop">
              <Link to="#" onClick={() => {
                logoff();
              }}>Sair</Link>
            </div>
          </>
        ) : (
          <>
            <div className="navMobile">
              {/* <Link to="#" onClick={() => {
                onCloseSidebar();
                setOpenLogin(true);
              }}>Login</Link> */}
              <Link to="/login" onClick={onCloseSidebar}>Login</Link>
            </div>
            <div className="navGeral">
              <Link to="/" onClick={onCloseSidebar}>Home</Link>
              <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link>
            </div>
            {/* <div className="navDesktop">
              <Link to="#" onClick={() => {
                onCloseSidebar();
                setOpenLogin(true);
              }}>Login</Link>
            </div> */}
            <div className="navDesktop">
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}