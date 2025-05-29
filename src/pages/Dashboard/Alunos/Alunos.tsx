import { Route, Routes } from "react-router";
import Trilhas from "./MinhasTrilhas";

export default function Aluno() {
  return (
    <>
      <Routes>
        <Route path="/minhastrilhas/*" element={<Trilhas />} />
      </Routes>
    </>
  )
}