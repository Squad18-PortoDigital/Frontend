import { useEffect, useState } from "react";
import ImgMainJnunes from "../../images/logo-header-jotanunes.png";
import "../../styles/Home.css"
import "../../styles/Animation-Home.css";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [animationShape, setAnimationShape] = useState("");
  const [animationImg, setAnimationImg] = useState("");

  function startAnimation() {
    setShowImage(false);
    setTimeout(() => {
      setAnimationShape("rotate-scale-down 1s ease-in-out both");

      setTimeout(() => {
        setAnimationShape("bounce-out-top 1.5s both");
        setTimeout(() => {
          setAnimationShape("");
          setShowImage(true);
          setAnimationImg("scale-in-ver-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both");
  
          setTimeout(() => {
            setAnimationImg("");
          }, 3000);
  
        }, 1600);
      }, 1100);
    }, 500);
  }

  useEffect(() => {
    // Inicia toda a animação
    startAnimation();

    setInterval(() => {

      setShowImage(false);
      setTimeout(() => {
        setAnimationShape("rotate-scale-down 1s ease-in-out both");

        setTimeout(() => {
          setAnimationShape("bounce-out-top 1.5s both");
          setTimeout(() => {
            setAnimationShape("");
            setShowImage(true);
            setAnimationImg("scale-in-ver-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both");

            setTimeout(() => {
              setAnimationImg("");
            }, 2500);

          }, 1600);
        }, 1100);
      }, 500);
      
    }, 5000);
  }, []);
  
  return (
    <>
      <div className="home-animation">
        <div className="container">
          {!showImage ? (
            <div className="shape" style={{ animation: animationShape, }} />
          ) : (
            <img
              // className={`image ${fadeImage ? "fade-in" : ""}`}
              className="imageAnimationHome"
              src={ImgMainJnunes}
              alt="Imagem"
              style={{
                animation: animationImg,
              }}
            />
          )}
          {/* <img
              // className={`image ${fadeImage ? "fade-in" : ""}`}
              className="imageAnimationHome"
              src={ImgMainJnunes}
              alt="Imagem"
              style={{
                animation: animationImg,
              }}
          /> */}
        </div>
      </div>
    </>
  );
}