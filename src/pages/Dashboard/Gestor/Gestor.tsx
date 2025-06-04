import { Route, Routes } from "react-router";
import Cursos from "./Cursos/Cursos";
import Loja from "./Loja/Loja";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { SidebarGestorSet } from "../../../utils/Globals.utils";
import Trilhas from "./Trilhas/index";

export default function Gestor() {
  const [, setSidebarGestor] = useAtom(SidebarGestorSet);

  useEffect(() => {
    setSidebarGestor(true);

    return () => {
      setSidebarGestor(false);
    };
  }, [setSidebarGestor]);

  return (
    <>
      <Routes>
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/trilhas/*" element={<Trilhas />} />
      </Routes>
    </>
  );
}