import { Route, Routes } from "react-router";
// import MinhasTrilhas from "./MinhasTrilhas";
import Trilha from "./Trilha/Trilha";
import Aula from "./Trilha/Aula";
import Quiz from "./Trilha/Quiz";

export default function Trilhas() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MinhasTrilhas />} /> */}
        <Route path="/" element={<Trilha />} />
        <Route path="/trilha/aula" element={<Aula />} />
        <Route path="/trilha/quiz" element={<Quiz />} />
      </Routes>
    </>
  )
}