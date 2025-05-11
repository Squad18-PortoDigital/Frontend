import { Route, Routes } from "react-router";
import Cursos from "./Cursos/Cursos";
import Loja from "./Loja/Loja";

export default function Gestor() {
  return (
    <>
    <Routes>
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/loja" element={<Loja />} />
    </Routes>
    </>
  );
}