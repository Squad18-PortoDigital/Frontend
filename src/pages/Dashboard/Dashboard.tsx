import { Route, Routes, useNavigate } from "react-router";
import HomeDashboard from "./Home/Home";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { PerfilUser, StateLogin, SidebarGestorSet } from "../../utils/Globals.utils";
import { UserModel } from "../../models/User.model";
import { jwtDecode } from "jwt-decode";
import Gestor from "./Gestor/Gestor";

export default function Dashboard() {
  const [, setIsLogged] = useAtom(StateLogin);
  const [, setPerfilUser] = useAtom(PerfilUser);
  const [SidebarGestor, ] = useAtom(SidebarGestorSet);

  const navigate = useNavigate();
  
  useEffect(() => {
    const userData: string | null = localStorage.getItem("token");

    if (userData === null) {
      setIsLogged(false);
      localStorage.removeItem("token");
      window.location.href = "/";
    } else {
      setIsLogged(true);
      // Aqui vai ficar o check do usuário após o login ou caso já tenha logado ele é redirecionado na Home direto para cá
      const checkUser: UserModel = jwtDecode(userData);
      if (checkUser.perfil === 1) {
        setPerfilUser(checkUser.perfil);
      } else {
        localStorage.removeItem("token");
        setIsLogged(false);
        alert("Tem algo de errado com seu perfil, entre em contato com o suporte.");
        window.location.href = "/";
      }
    }

  }, [setIsLogged, navigate, setPerfilUser]);

  useEffect(() => {
    console.log(SidebarGestor);
  }, [SidebarGestor]);

  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
      <Route path="/gestor/*" element={<Gestor />} />
    </Routes>
  );
}