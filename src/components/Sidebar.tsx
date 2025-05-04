import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { StateLogin } from "../utils/Globals.utils";
import { useAtom } from "jotai";

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function Sidebar({ isOpenSidebar, onCloseSidebar }: SidebarProps) {
  const [isLogged, setIsLogged] = useAtom(StateLogin);

  function logoff() {
    setIsLogged(false);
    localStorage.removeItem("userData");
    window.location.href = "/";
  }

  return (
    <div className={`sidebar ${isOpenSidebar ? "open" : ""}`}>
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
              <Link to="/login" onClick={onCloseSidebar}>Login</Link>
            </div>
            <div className="navGeral">
              <Link to="/" onClick={onCloseSidebar}>Home</Link>
              <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link>
            </div>
            <div className="navDesktop">
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}