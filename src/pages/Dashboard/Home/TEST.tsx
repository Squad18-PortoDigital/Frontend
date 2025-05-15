import { useEffect } from "react";
import "../../../styles/dashboard/Home.css";
import pinguinhos from "../../../images/pinguinhos.svg";
import PinturaRedonda from "../../../images/PinturaRedonda.svg";
import ImgArco from "../../../images/ImgArco.svg";
import ImgCertificado from "../../../images/ImgCertificado.svg";
import ImgUni from "../../../images/ImgUni.svg";
import PC from "../../../images/PC.svg";
import Onda from "../../../images/Onda.svg";
import TracoOnda from "../../../images/TracoOnda.svg";
import Traco from "../../../images/Traco.svg";
import Estrela from "../../../images/Estrela.svg";
import Estrela2 from "../../../images/Estrela2.svg";
import video from "../../../images/video.mp4";
import pinguinhos2 from "../../../images/pinguinhos2.svg";

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

            <div className="RelativPinguinhos">
              <img className="pinguinhos" src={pinguinhos} alt="pinguinhos"/>
            </div>

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
            <div className="Circulo">
              <div className="Circulo-Laranja"></div>
              <img className="PinturaRedonda" src={PinturaRedonda} alt="PinturaRedonda" />
              <img className="PC" src={PC} alt="PC" />
              <img className="Traco" src={Traco} alt="Traco" />
              <img className="Traco2" src={Traco} alt="Traco" />
            </div>
          </div>

          <div className="Relativ-Circulo">
              <div className="Circulo-Laranja-2-sobreposto"></div>
              <img className="Estrela" src={Estrela} alt="Estrela" />
              <div className="Caixote1"></div>
              <div className="Caixote2"></div>
              <div className="Caixote3"></div>
              <div className="Caixote4"></div>
              <div className="Caixote5"></div>
              <div className="Caixote6"></div>
          </div>

          <div className="Parte-2">
            <h2 className="Acompanhe">
            Acompanhamos o seu desenvolvimento.
            </h2>

            <div className="Pp">
              <img className="ImgArco" src={ImgArco} alt="ImgArco" />
                <p className="paragrafo-Arco">
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.
              </p>
            </div>

            <div className="Pp">
              <img className="ImgCertificado" src={ImgCertificado} alt="ImgCertificado" />
              <p className="paragrafo-Certificado">
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.
              </p>
            </div>

            <div className="Pp">
              <img className="ImgUni" src={ImgUni} alt="ImgUni" />
              <p className="paragrafo-Uni">
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.
              </p>
            </div>

            <div className="Bb">
              <button className="botaoSaibaMais">
                Saiba mais!!
              </button>
            </div>

            <img className="Estrela2" src={Estrela2} alt="Estrela2" />
            <img className="Estrela3" src={Estrela} alt="Estrela" />

          </div>

          <div className="Parte-3">
            <div className="Img-Parte3">
              <img className="Onda" src={Onda} alt="Onda" />
              <img className="TracoOnda" src={TracoOnda} alt="TracoOnda" />
              <img className="TracoOnda2" src={TracoOnda} alt="TracoOnda" />
            </div>

            <div className="Paragrafos-Parte-3">
              <h2 className="Titulo-Parte-3">
                Trusted by the best names in finance.
              </h2>

              <div className="Pp">
                <p className="paragrafo-Parte-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis  officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <div className="Bb">
                <button className="botaoSaibaMais">
                  Saiba mais!!
                </button>
              </div>

              <div className="VideoDiv">
                  <video className="video123" width="100%" height="auto" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                <p className="Titulo-video">
                  Lançamento Park Barra Mais Viver - Barra dos Coqueiros - Jotanunes
                </p>
              </div>

              <div className="Bolinhas">
                <div className="carrosel1"></div>
                <div className="carrosel2"></div>
                <div className="carrosel3"></div>
                <div className="carrosel4"></div>
                <div className="carrosel5"></div>
              </div>

              <img className="pinguinhos2" src={pinguinhos2} alt="pinguinhos2"/>

            </div>

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