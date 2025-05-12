import { useEffect } from "react";
import "../../../styles/dashboard/Home.css";
// import fundoDashboard from "../../../images/fundoDashboard.png";
import PinturaRedonda from "../../../images/PinturaRedonda.svg";
import PC from "../../../images/PC.svg";
import Traco from "../../../images/Traco.svg";
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
            <h2 className="tituloJotinha">
              An impactful headline about our software.
            </h2>
            <p className="paragrafoJotinha">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.
            </p>

            <button className="botaoSaibaMais">
              Saiba mais!!
            </button>


          </div>

          <div className="Relativ-Circulo">
              <div className="Circulo-Laranja"></div>
              <img className="PinturaRedonda" src={PinturaRedonda} alt="PinturaRedonda" />
              <img className="PC" src={PC} alt="PC" />
              <img className="Traco" src={Traco} alt="Traco" />
              <img className="Traco2" src={Traco} alt="Traco" />
          </div>

          <div className="Relativ-Circulo">
              <div className="Circulo-Laranja-2-sobreposto"></div>

          </div>
          
          

          {/*<img className="cardContinue" src={continuever} alt="conV" />
          
          {/* <div className="jotinhaImg">
            <img src={Joginha} alt="jotinha" />
          </div>
          <div className="cardContinue">
            <img src={continuever} alt="conV" />
          </div> */}

        </div>
      </div>
    </>
  );
};