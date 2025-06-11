import { useEffect } from "react";
import "../../../styles/dashboard/Home.css";
import pinguinhos from "../../../images/pinguinhos.svg";
import ImgArco from "../../../images/ImgArco.svg";
import ImgCertificado from "../../../images/ImgCertificado.svg";
import ImgUni from "../../../images/ImgUni.svg";
import Estrela from "../../../images/Estrela.svg";
import Estrela2 from "../../../images/Estrela2.svg";
import video from "../../../images/video.mp4";
import pinguinhos2 from "../../../images/pinguinhos2.svg";
import grafico from "../../../images/grafico.svg";
import PC from "../../../images/PC.svg";
import PinturaRedonda from "../../../images/PinturaRedonda.svg";

export default function HomeDashboard() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      main {
        padding: 0px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="homeDashboard">
      <div className="topHomeDashboard">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="textJotinha">
            <div className="RelativPinguinhos">
              <img src={pinguinhos} alt="pinguinhos"/>
            </div>
            
            <h1 className="tituloJotinha">
              An impactful headline about our software.
            </h1>
            
            <p className="paragrafoJotinha">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.
            </p>

            <button className="botaoSaibaMais">
              Saiba mais!!
            </button>
          </div>

          <div className="hero-visual">
            <div className="main-circle">
              <div className="devices-container">
                  <img className="PC" src={PC} alt="PC" />
              </div>
            </div>
            
            {/* Decorative Stars */}
            <img 
              src={Estrela} 
              alt="Estrela" 
              className="star-decoration star1"
            />
            <img 
              src={Estrela2} 
              alt="Estrela2" 
              className="star-decoration star2"
            />
            <img 
              src={Estrela} 
              alt="Estrela" 
              className="star-decoration star3"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="features-title">
            Acompanhamos o seu desenvolvimento.
          </h2>

          <div className="features-grid">
            <div className="feature-item">
              <img className="feature-icon" src={ImgArco} alt="ImgArco" />
              <div className="feature-text">
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={ImgCertificado} alt="ImgCertificado" />
              <div className="feature-text">
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.</p>
              </div>
            </div>

            <div className="feature-item">
              <img className="feature-icon" src={ImgUni} alt="ImgUni" />
              <div className="feature-text">
                <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>

          <button className="botaoSaibaMais">
            Saiba mais!!
          </button>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <div className="decorative-wave"></div>
          
          <div className="trust-content">
            <div className="trust-text">
              <h2>Trusted by the best names in finance.</h2>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <button className="botaoSaibaMais">
                Saiba mais!!
              </button>
            </div>

            <div className="video-container">
              <video className="video123" controls>
                <source src={video} type="video/mp4" />
              </video>
              
              <p className="video-title">
                Lançamento Park Barra Mais Viver - Barra dos Coqueiros - Jotanunes
              </p>

            </div>
          </div>

          {/* Decorative Elements */}
          <img 
            src={pinguinhos2} 
            alt="pinguinhos2" 
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '60px',
              opacity: 0.7
            }}
          />
        </section>
      </div>
    </div>
  );
}