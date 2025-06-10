import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import {
  PerfilUser,
  StateLogin,
  RouterHomeLogoff,
} from "../utils/Globals.utils";
import { useAtom } from "jotai";

interface SidebarProps {
  isOpenSidebar: boolean;
  onCloseSidebar: () => void;
}

export default function Sidebar({
  isOpenSidebar,
  onCloseSidebar,
}: SidebarProps) {
  const [isLogged, setIsLogged] = useAtom(StateLogin);
  const [Perfil] = useAtom(PerfilUser);
  const [, setRouterHome] = useAtom(RouterHomeLogoff);

  function logoff() {
    setIsLogged(false);
    localStorage.removeItem("user");
    // window.location.href = "/";
    setRouterHome(true);
  }

  return (
    <>
      <div className={`sidebar ${isOpenSidebar ? "open" : ""}`}>
        <button className="close-btn" onClick={onCloseSidebar}>
          ×
        </button>
        <nav>
          {isLogged ? (
            <>
              {/*admin é o gestor, não irei trocar nomeclatura*/}
              {Perfil === "admin" ? (
                <>
                  {/* 1 */}
                  <div className="navGeral">
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Inicio
                    </Link>
                    <Link
                      to="/dashboard/gestor/cursos"
                      onClick={onCloseSidebar}
                    >
                      Cursos
                    </Link>
                    <Link
                      to="/dashboard/gestor/trilhas"
                      onClick={onCloseSidebar}
                    >
                      Trilhas
                    </Link>
                    <Link to="/dashboard/gestor/loja" onClick={onCloseSidebar}>
                      Loja
                    </Link>
                    {/* <Link to="/dashboard" onClick={onCloseSidebar}>Certificados</Link> */}
                    {/* <Link to="/dashboard" onClick={onCloseSidebar}>Conquistas</Link> */}
                    {/* <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link> */}
                  </div>
                  <div className="navMobile">
                    <Link
                      to="#"
                      onClick={() => {
                        onCloseSidebar();
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                  <div className="navDesktop">
                    <Link
                      to="#"
                      onClick={() => {
                        onCloseSidebar();
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                </>
              ) : Perfil === "instrutor" ? (
                <>
                  {/* 2 */}
                  <div className="navGeral">
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Inicio
                    </Link>
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Cursos
                    </Link>
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Trilhas
                    </Link>
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Loja
                    </Link>
                    {/* <Link to="/dashboard" onClick={onCloseSidebar}>Certificados</Link> */}
                    {/* <Link to="/dashboard" onClick={onCloseSidebar}>Conquistas</Link> */}
                    {/* <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link> */}
                  </div>
                  <div className="navMobile">
                    <Link
                      to="#"
                      onClick={() => {
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                  <div className="navDesktop">
                    <Link
                      to="#"
                      onClick={() => {
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                </>
              ) : Perfil === "aluno" ? (
                <>
                  {/* 2 */}
                  <div className="navGeral">
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Inicio
                    </Link>
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Cursos
                    </Link>
                    <Link
                      to="/dashboard/aluno/minhastrilhas"
                      onClick={onCloseSidebar}
                    >
                      Trilhas
                    </Link>
                    <Link to="/dashboard" onClick={onCloseSidebar}>
                      Loja
                    </Link>
                    {/* <Link to="/dashboard" onClick={onCloseSidebar}>Certificados</Link> */}
                    {/* <Link to="/dashboard" onClick={onCloseSidebar}>Conquistas</Link> */}
                    {/* <Link to="/sobre" onClick={onCloseSidebar}>Sobre</Link> */}
                  </div>
                  <div className="navMobile">
                    <Link
                      to="#"
                      onClick={() => {
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                  <div className="navDesktop">
                    <Link
                      to="#"
                      onClick={() => {
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Esse é padrão caso a checagem de usuário dê erro e não realize o logoff automatico */}
                  <div className="navMobile">
                    <Link
                      to="#"
                      onClick={() => {
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                  <div className="navDesktop">
                    <Link
                      to="#"
                      onClick={() => {
                        logoff();
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="navMobile">
                <Link to="/login" onClick={onCloseSidebar}>
                  Login
                </Link>
              </div>
              <div className="navGeral">
                <Link to="/" onClick={onCloseSidebar}>
                  Home
                </Link>
                <Link to="/sobre" onClick={onCloseSidebar}>
                  Sobre
                </Link>
              </div>
              <div className="navDesktop">
                <Link to="/login">Login</Link>
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
}
