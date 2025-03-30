import { useEffect, useState } from "react";
import ImgMainJnunes from "../../images/logo-header-jotanunes.png";
import "../../styles/Home.css"
import "../../styles/Animation-Home.css";

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [borderRadius, setBorderRadius] = useState("13px");
  const [showImage, setShowImage] = useState(false);
  const [fadeImage, setFadeImage] = useState(false);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setAnimation("rotate-scale-down 1s ease-in-out both");

    //   setTimeout(() => {
    //     setAnimation("bounce-out-top 1.5s both");
    //   }, 1100);

    //   setTimeout(() => {
    //     setAnimation("");
    //   }, 5000);
    // }, 5500);

    // return () => clearInterval(interval);

    setInterval(() => {
      setAnimation("rotate-scale-down 1s ease-in-out both");

      setTimeout(() => {
        setAnimation("bounce-out-top 1.5s both");
      }, 1100);

      setTimeout(() => {
        setAnimation("");
      }, 5000);
    }, 5500);
  }, []);
  
  return (
    <>
      <div className="home-animation">
        <div className="container" 
          // style={{animation: animation}}
        >
          {!showImage ? (
            <div
              className="shape"
              style={{
                // transform: `rotate(${rotation}deg)`,
                // borderRadius: borderRadius,
                // height: circle,
                // width: circle,
                animation: animation,
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