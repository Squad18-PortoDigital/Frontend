import { Route, Routes, useNavigate } from "react-router";
import HomeDashboard from "./Home/Home";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { StateLogin } from "../../models/Login.model";

export default function Dashboard() {
  const [, setIsLogged] = useAtom(StateLogin);

  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("dashboard");
    const userData: string | null = localStorage.getItem("userData");

    if (userData === null) {
      setIsLogged(false);
      localStorage.removeItem("userData");
      window.location.href = "/";
    } else {
      setIsLogged(true);
      // Aqui vai ficar o check do usuário após o login ou caso já tenha logado ele é redirecionado na Home direto para cá
      // const checkUser: object = JSON.parse(userData);
    }

  }, [setIsLogged, navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
    </Routes>
  );
}