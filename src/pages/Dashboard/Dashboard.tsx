import { Route, Routes, useNavigate } from "react-router";
import HomeDashboard from "./Home/Home";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { PerfilUser, StateLogin, RouterHomeLogoff } from "../../utils/Globals.utils";
import { UserModel } from "../../models/User.model";
import { jwtDecode } from "jwt-decode";
import Gestor from "./Gestor/Gestor";

export default function Dashboard() {
  const [, setIsLogged] = useAtom(StateLogin);
  const [, setPerfilUser] = useAtom(PerfilUser);
  const [RouterHome, setRouterHome] = useAtom(RouterHomeLogoff);

  const navigate = useNavigate();
  
  useEffect(() => {
    const userData: string | null = localStorage.getItem("token");

    if (userData === null) {
      setIsLogged(false);
      localStorage.removeItem("token");
      // window.location.href = "/";
      navigate('/', { replace: true });
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
        // window.location.href = "/";
        navigate('/', { replace: true });
      }
    }

  }, [setIsLogged, setPerfilUser, navigate]);

  useEffect(() => {
    console.log("RouterHome: " + RouterHome);
    if (RouterHome) {
      navigate('/', { replace: true });
    }
  }, [RouterHome, setRouterHome, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
      <Route path="/gestor/*" element={<Gestor />} />
    </Routes>
  );
}