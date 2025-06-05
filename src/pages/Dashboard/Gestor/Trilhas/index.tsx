import { Route, Routes } from "react-router";
import Trilhas from "./Trilhas";
import { useEffect } from "react";
import SidebarGestor from "../../../../components/SidebarGestor";
import "../../../../styles/dashboard/gestor/MainTrilhas.css";


export default function MainTrilhas() {

  // esse useEffect é apenas para a estilo
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
          main {
            padding: 0px;
          }
        `;
    document.head.appendChild(style);

    // remover o CSS quando o componente for desmontado ou a rota mudar
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="container-mainTrilhas flex">
        <SidebarGestor />
        <div className="p-20 w-full">
          <Routes>
            <Route path="/" element={<Trilhas />} />
          </Routes>
        </div>
      </div>
    </>
  );
}