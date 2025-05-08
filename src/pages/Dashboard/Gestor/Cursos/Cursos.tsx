import "../../../../styles/dashboard/gestor/Cursos.css";
import "../../../../styles/dashboard/gestor/Carrossel.css";
import triangulo from "../../../../images/triangulo.svg";
import welcome from "../../../../images/cursosWelcome.svg";
import retangulo from "../../../../images/retangulo-cursos.svg";
import sublinhado from "../../../../images/sublinhado-retangulo-cursos.svg";
import expressao from "../../../../images/expressaoCarrosselCursos.svg";
import setaDireita from "../../../../images/setaDireita.svg";
import setaEsquerda from "../../../../images/setaEsquerda.svg";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const generateItems = (count: number) => Array.from({ length: count }, (_, i) => `Item ${i + 1}`);

export default function Cursos() {
  const items = generateItems(10);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          draggable: true,
        },
      },
    ],
    nextArrow: <img src={setaDireita} alt="seta" className="arrow next" />,
    prevArrow: <img src={setaEsquerda} alt="seta" className="arrow prev" />,
  };

  return (
    <>
      <div className="container-cursos flex flex-col items-center w-full">
        <div className="container-top flex flex-col w-full">
          <div className="w-screen relative z-0">
            <img className="trianguloCursos" src={triangulo} alt="triangulo" />
          </div>
          <div className="box-container-top z-10 flex flex-col">
            <div className="container-welcome flex flex-col items-center">
              <img className="cursosWelcomeIMG" src={welcome} alt="welcome message" />
              <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.</p>
              <button>Curso em destaque!!</button>
            </div>
            <div className="container-imgs-cursos flex flex-col items-center mt-16 mb-16">
              {/* trocar esse retangulo futuramente */}
              <img className="retangulo-cursos" src={retangulo} alt="retangulo" />
              <img className="sublinhado-cursos" src={sublinhado} alt="sublinhado" />
            </div>
          </div>
          
        </div>
        
        <div className="container-carrosselCursos w-4/5 mt-16">
          <div className="w-full relative">
            <img className="expressaoCursos" src={expressao} alt="expressao" />
          </div>
          <div className="container-carrossel">
            <Slider {...settings}>
              {items.map((item, index) => (
                <div className="carrosselCursos flex flex-col items-center" key={index}>
                  <img className="retangulo-cursos" src={retangulo} alt="retangulo" />
                  <div className="relative w-full">
                    <button className="btn-carrosselCursos">Análise do Curso</button>
                  </div>
                  <div className="text-carrosselCursos">
                    <p className="titulo-carrosselCursos text-xl mb-3 mt-3">Lorem ipsum {index + 1}</p>
                    <p className="descricao-carrosselCursos text-sm">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.</p>
                    <p className="footer-carrosselCursos text-xs text-end mt-4">Lorem ipsum</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-full text-center mt-10">
            <p className="text-red-600 underline">Ver Mais</p>
          </div>
        </div>
      </div>
    </>
  );
}