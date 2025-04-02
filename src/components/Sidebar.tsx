import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function Sidebar({ isOpenSidebar, onCloseSidebar }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpenSidebar ? "open" : ""}`}>
      <button className="close-btn" onClick={onCloseSidebar}>×</button>
      <nav>
        <div className="navMobile">
          <Link to="/login" onClick={onCloseSidebar}>Login</Link>
        </div>
        <div className="navGeral">
          <Link to="/" onClick={onCloseSidebar}>Home</Link>
          <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link>
        </div>
        <div className="navDesktop">
          <Link to="" onClick={onCloseSidebar}>Login</Link>
        </div>
      </nav>
    </div>
  );
}