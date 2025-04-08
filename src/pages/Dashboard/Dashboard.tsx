import { Route, Routes } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import HomeDashboard from "./Home/Home";
import { useEffect } from "react";
import { setIsLogged } from "../../models/Login.model";

export default function Dashboard() {
  
  useEffect(() => {
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

  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomeDashboard />} />
    </Routes>
  );
}