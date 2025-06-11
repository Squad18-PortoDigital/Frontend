import { Route, Routes, useNavigate } from "react-router";
import HomeDashboard from "./Home/Home";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { PerfilUser, StateLogin, RouterHomeLogoff, AccessToken, NomeUser } from "../../utils/Globals.utils";
import { UserModel } from "../../models/User.model";
// import { jwtDecode } from "jwt-decode";
import Gestor from "./Gestor/Gestor";
import Aluno from "./Alunos/Alunos";

export default function Dashboard() {
  const [, setIsLogged] = useAtom(StateLogin);
  const [, setPerfilUser] = useAtom(PerfilUser);
  const [, setAccessToken] = useAtom(AccessToken);
  const [, setNomeUser] = useAtom(NomeUser);
  const [RouterHome, setRouterHome] = useAtom(RouterHomeLogoff);

  const navigate = useNavigate();
  
  useEffect(() => {
    const userData: string | null = localStorage.getItem("user");

    if (userData === null) {
      setIsLogged(false);
      localStorage.removeItem("user");
      // window.location.href = "/";
      navigate('/', { replace: true });
    } else {
      setIsLogged(true);
      // Aqui vai ficar o check do usuário após o login ou caso já tenha logado ele é redirecionado na Home direto para cá
      const checkUser: UserModel = JSON.parse(userData);
      switch (checkUser.nivel) {
        case "admin":
          setPerfilUser(checkUser.nivel);
          setAccessToken(checkUser.access);
          setNomeUser(checkUser.nome);
          break;
        case "instrutor":
          setPerfilUser(checkUser.nivel);
          setAccessToken(checkUser.access);
          setNomeUser(checkUser.nome);
          break;
        case "aluno":
          setPerfilUser(checkUser.nivel);
          setAccessToken(checkUser.access);
          setNomeUser(checkUser.nome);
          break;
        default:
          localStorage.removeItem("user");
          setIsLogged(false);
          setPerfilUser("");
          alert("Tem algo de errado com seu perfil...");
          alert("Tente fazer login novamente ou entre em contato com o suporte.")
          // window.location.href = "/";
          navigate('/', { replace: true });
          break;
      }
    }

  }, [setIsLogged, setPerfilUser, navigate, setAccessToken, setNomeUser]);

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
      <Route path="/aluno/*" element={<Aluno />} />
    </Routes>
  );
}