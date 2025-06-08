// import { LinearProgress } from "@mui/material";
import { imageSidebarGestor } from "../images";
import "../styles/dashboard/gestor/SidebarGestor.css";
// import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { NomeUser, OpenSidebarGestor } from "../utils/Globals.utils";
import {
  BookOpenCheck,
  ChartLine,
  LibraryBig,
  ShoppingCart,
} from "lucide-react";

/*
Quando o backend estiver pronto concluir a sidebar

Adicionar cores relativas para bara de XP

*/

// interface SidebarProps {
//   isOpenSidebarGestor?: boolean;
//   onCloseSidebarGestor?: () => void;
// }

/* { isOpenSidebarGestor, onCloseSidebarGestor }: SidebarProps */

export default function SidebarGestor() {
  // const [progress, setProgress] = useState<number>(0);
  // const [barColor, setBarColor] = useState<string>("");
  const [openSidebarGestor, setOpenSidebarGestor] = useAtom(OpenSidebarGestor);
  const [nomeUser] = useAtom(NomeUser);

  // useEffect(() => {
  //   // const timer = setInterval(() => {
  //   //   setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //   // }, 100);

  //   // return () => {
  //   //   clearInterval(timer);
  //   // };
  //   setProgress(10);
  // }, [progress]);

  return (
    <>
      {/* <div className="sidebar-loja"> */}
      <div className={`sidebar-loja ${openSidebarGestor ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => {
            setOpenSidebarGestor(false);
          }}
        >
          ×
        </button>
        <div className="sidebar-loja-top" />
        <div className="sidebar-loja-img relative">
          <img src={imageSidebarGestor} alt="imgGestor" />
        </div>
        <div className="sidebar-loja-bottom">
          <p className="sidebar-loja-nome">{nomeUser}</p>
          <div className="sidebar-loja-options">
            <div className="sidebar-loja-item">
              <LibraryBig />
              <p>Cursos</p>
            </div>
            <div className="sidebar-loja-item">
              <BookOpenCheck />
              <p>Quiz</p>
            </div>
            <div className="sidebar-loja-item">
              <ShoppingCart />
              <p>Loja</p>
            </div>
            <div className="sidebar-loja-item">
              <ChartLine />
              <p>Relatórios</p>
            </div>
          </div>

          {/* <p className="sidebar-loja-nome">João Eduardo</p> */}
          {/* <div className="sidebar-nivel">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
