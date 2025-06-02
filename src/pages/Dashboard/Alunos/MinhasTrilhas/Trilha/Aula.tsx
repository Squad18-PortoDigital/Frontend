import { NotebookPen, NotebookText } from "lucide-react";
import "../../../../../styles/dashboard/aluno/Aula.css";
import { useEffect } from "react";

export default function Aula() {
  useEffect(() => {
    const mainElement = document.querySelector("main");

    if (mainElement) {
      mainElement.style.padding = "0";
    }

    return () => {
      if (mainElement) {
        mainElement.style.padding = "";
      }
    };
  }, []);
  return (
    <>
      <div className="container-aula">
        <div className="container-lateral-aula">
          <div className="modulo-aula">
            <div className="nome-modulo-aula">
              <NotebookPen size={35} />
              Segurança do Trabalho: Mólulo 1 - [40HS]
            </div>
          </div>
          <div className="aulas">
            <div>
              <p>[ ] Introdução a Segurança do Trabalho</p>
            </div>
            <div>
              <p>[ ] Normas e Segurança do Trabalho</p>
            </div>
            <div>
              <p>[ ] Prevenção e Controle de Sinistros</p>
            </div>
          </div>
          <div className="quiz-aula">
            <div className="titulo-quiz-aula">
              <NotebookText size={35} />
              Quiz - Segurança do Trabalho: Módulo 01
            </div>
          </div>
        </div>
        <div className="container-video-aula">
          <div className="informacao-aula">
            <h1 className="titulo-informacao-aula">Introdução</h1>
            <p className="descricao-informacao-aula">
              Segurança do Trabalho: Módulo 01 [40 HORAS] Introdução
            </p>
          </div>
          <div className="video-aula">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sIjEzqbD2jg?si=sX2Cu-sRRQlPhYp7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              /* full screen - falta implementar */
            ></iframe>
          </div>
          <div className="descricao-aula">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ea commodo consequat. Duis aute irure dolor in r
            </p>
          </div>
          <div className="navegacao-aula">
            <p>Modulo Anterior</p>
            <p>Próxima Aula</p>
          </div>
        </div>
      </div>
    </>
  );
}
