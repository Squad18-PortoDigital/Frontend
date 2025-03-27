import { useEffect, useState } from "react";
import ImgMainJnunes from "../../images/logo-header-jotanunes.png";
import "../../styles/Home.css"

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [borderRadius, setBorderRadius] = useState("13px");
  // const [circle, setCircle] = useState("50px");
  const [showImage, setShowImage] = useState(false);
  const [fadeImage, setFadeImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(90);

      setTimeout(() => {
        setBorderRadius("50%");
      }, 1000);

      setTimeout(() => {
        setFadeImage(true);
      }, 2000);

      setTimeout(() => {
        setShowImage(true);
      }, 2500);

      setTimeout(() => {
        setFadeImage(false);
      }, 4000);

      setTimeout(() => {
        setShowImage(false);
        setRotation(0);
        setBorderRadius("13px");
      }, 5000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <div className="home-animation">
        <div className="container">
          {!showImage ? (
            <div
              className="shape"
              style={{
                transform: `rotate(${rotation}deg)`,
                borderRadius: borderRadius,
              }}
            ></div>
          ) : (
            <img
              className={`image ${fadeImage ? "fade-in" : ""}`}
              src={ImgMainJnunes}
              alt="Imagem"
            />
          )}
          {/* <img
              className={`image ${fadeImage ? "fade-in" : ""}`}
              src={ImgMainJnunes}
              alt="Imagem"
            /> */}
        </div>
      </div>
    </>
  );
}