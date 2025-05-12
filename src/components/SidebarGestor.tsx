import { LinearProgress } from "@mui/material";
import { imageSidebarGestor } from "../images";
import "../styles/dashboard/gestor/SidebarGestor.css";
import { useEffect, useState } from "react";

/*
Quando o backend estiver pronto concluir a sidebar

Adicionar cores relativas para bara de XP

*/

export default function SidebarGestor() {
  const [progress, setProgress] = useState<number>(0);
  // const [barColor, setBarColor] = useState<string>("");

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    // }, 100);

    // return () => {
    //   clearInterval(timer);
    // };
    setProgress(10);
  }, [progress]);

  return (
    <>
      <div className="sidebar-loja">
        <div className="sidebar-loja-top" />
        <div className="sidebar-loja-img relative">
          <img src={imageSidebarGestor} alt="imgGestor" />
        </div>
        <div className="sidebar-loja-bottom">
          <p className="sidebar-loja-nome">João Eduardo</p>
          <div className="sidebar-nivel">
            <p className="sidebar-nivel-txt">Nível 1</p>
            <div className="sidebar-barra-nivel">
              <LinearProgress variant="determinate" color="inherit" value={progress} sx={{
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#FF5733',
                },
              }} />
            </div>
          </div>
          <div className="sidebar-dados flex">
            <div className="sidebar-dados-xp flex items-center text-center">
              <p className="w-full">400 de xp para o próximo nível</p>
            </div>
            <div className="sidebar-dados-coins flex items-center text-center">
              <p className="w-full">40 JCoins</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}