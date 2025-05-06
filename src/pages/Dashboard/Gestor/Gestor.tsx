import { Route, Routes } from "react-router";
import Cursos from "./Cursos/Cursos";

export default function Gestor() {
  return (
    <>
    <Routes>
      <Route path="/cursos" element={<Cursos />} />
    </Routes>
    </>
  );
}