import { useEffect, useRef, useState } from "react";
import ImgMainJnunes from "../../images/logo-header-jotanunes.png";
import "../../styles/Home.css"
import "../../styles/Animation-Home.css";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [animationShape, setAnimationShape] = useState("");
  const [animationImg, setAnimationImg] = useState("");
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const animationSequence = async () => {
      if (!isMounted.current) return;

      setShowImage(false);
      await new Promise(resolve => setTimeout(resolve, 500));
      setAnimationShape('rotate-scale-down 1s ease-in-out both');
      if (!isMounted.current) return;
      await new Promise(resolve => setTimeout(resolve, 1100));
      setAnimationShape('bounce-out-top 1.5s both');
      if (!isMounted.current) return;
      await new Promise(resolve => setTimeout(resolve, 1600));
      setAnimationShape('');
      setShowImage(true);
      setAnimationImg('scale-in-ver-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both');
      if (!isMounted.current) return;
      await new Promise(resolve => setTimeout(resolve, 2500));
      setAnimationImg('');
    };

    var intervalId = setInterval(animationSequence, 5000);

    // setTimeout(animationSequence, 500);
    animationSequence();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isMounted.current = false;
        setShowImage(false);
        setAnimationShape("");
        setAnimationImg("");
        clearInterval(intervalId);
      } else {
        isMounted.current = true;
        intervalId = setInterval(animationSequence, 5000);
        animationSequence();
      }
    });

    return () => {
      isMounted.current = false;
      setShowImage(false);
      setAnimationShape("");
      setAnimationImg("");
      clearInterval(intervalId);
    };
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