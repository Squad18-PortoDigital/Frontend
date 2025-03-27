import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* <div className="t-r" /> */}
      <button className="close-btn" onClick={onClose}>×</button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/sobre" onClick={onClose}>Sobre</Link>
      </nav>
    </div>
  );
}