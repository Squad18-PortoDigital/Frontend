import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { PerfilUser, StateLogin } from "../utils/Globals.utils";
import { useAtom } from "jotai";

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function Sidebar({ isOpenSidebar, onCloseSidebar }: SidebarProps) {
  const [isLogged, setIsLogged] = useAtom(StateLogin);
  const [Perfil, ] = useAtom(PerfilUser);

  function logoff() {
    setIsLogged(false);
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <div className={`sidebar ${isOpenSidebar ? "open" : ""}`}>
      <button className="close-btn" onClick={onCloseSidebar}>×</button>
      <nav>
        {isLogged ? (
          <>
            {/* 1 é gestor e 2 é aluno, temporariamente ficará assim atṕe unir com o backend */}
            {Perfil === 1 ? (
              <>
                {/* 1 */}
                <div className="navGeral">
                  <Link to="/dashboard" onClick={onCloseSidebar}>Inicio</Link>
                  <Link to="/dashboard/gestor/cursos" onClick={onCloseSidebar}>Cursos</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Trilhos</Link>
                  <Link to="/dashboard/gestor/loja" onClick={onCloseSidebar}>Loja</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Certificados</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Conquistas</Link>
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
            ) : Perfil === 2 ? (
              <>
                {/* 2 */}
                <div className="navGeral">
                  <Link to="/dashboard" onClick={onCloseSidebar}>Inicio</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Cursos</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Trilhos</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Loja</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Certificados</Link>
                  <Link to="/dashboard" onClick={onCloseSidebar}>Conquistas</Link>
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
                {/* Esse é padrão caso a checagem de usuário dê erro e não realize o logoff automatico */}
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
            )
            }
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