import { useEffect } from "react";
import "../../../styles/dashboard/Home.css";
// import fundoDashboard from "../../../images/fundoDashboard.png";
import Joginha from "../../../images/jotinha.svg";
import continuever from "../../../images/continuever.svg";
import imghome1 from "../../../images/imghome1.svg";
import { caixotes } from "../../../images/topicosCategoria";
import saibaMais from "../../../images/saibaMainDashboard.svg";

export default function HomeDashboard() {

  // esse useEffect é apenas para a estilo
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      main {
        padding: 0px;
      }
    `;
    document.head.appendChild(style);

    // remover o CSS quando o componente for desmontado ou a rota mudar
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="homeDashboard">
        <div className="topHomeDashboard">
          <div className="textJotinha">
            <h2>
              Transformando o futuro da construção civil em Sergipe
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incon proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <img className="jotinhaImg" src={Joginha} alt="jotinha" />
          <img className="cardContinue" src={continuever} alt="conV" />
          
          {/* <div className="jotinhaImg">
            <img src={Joginha} alt="jotinha" />
          </div>
          <div className="cardContinue">
            <img src={continuever} alt="conV" />
          </div> */}

        </div>
        <div className="midHomeDashboard">
          <img className="midImdDashboard" src={imghome1} alt="imghome1" />

          {/* <div className="midImdDashboard">
            <img src={imghome1} alt="imghome1" />
          </div> */}

          <div className="textMidDashboard">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <img src={saibaMais} alt="saibamais" />
          </div>

          {/* <div className="textMidDashboard">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div> */}

        </div>
        <div className="topicosCategoriaDashboard">
          <div className="headerTextTC">
            <h1>Tópicos por Categoria</h1>
          </div>
          <div className="categorias">
            <img className="caixote" src={caixotes.caixote1} alt="caixote" />
            <img className="caixote" src={caixotes.caixote2} alt="caixote" />
            <img className="caixote" src={caixotes.caixote3} alt="caixote" />
            <img className="caixote" src={caixotes.caixote4} alt="caixote" />
            <img className="caixote" src={caixotes.caixote5} alt="caixote" />
            <img className="caixote" src={caixotes.caixote6} alt="caixote" />
          </div>
        </div>
        <div className="footerHomerDashboard">
          <div className="headerFooterHD">
            <h1>Aulas Assistidas</h1>
          </div>
          <div className="footerCarrosselHD">
            <p>Aqui vai ficar o carrossel</p>
          </div>
        </div>
      </div>
    </>
  );
};