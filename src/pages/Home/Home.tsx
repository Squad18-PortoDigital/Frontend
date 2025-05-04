import { useEffect, useRef, useState } from "react";
import ImgMainJnunes from "../../images/logo-header-jotanunes.png";
import "../../styles/Home.css"
import "../../styles/Animation-Home.css";
import { StateLogin } from "../../models/Login.model";
import { useAtom } from "jotai";
import { useNavigate } from "react-router";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [animationShape, setAnimationShape] = useState("");
  const [animationImg, setAnimationImg] = useState("");
  const isMounted = useRef(true);
  const [, setIsLogged] = useAtom(StateLogin);

  const navigate = useNavigate();

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

  useEffect(() => {
    const mainElement = document.querySelector('main');

    if (mainElement) {
      mainElement.style.padding = '0';
    }

    return () => {
      if (mainElement) {
        mainElement.style.padding = '';
      }
    };
  }, []);

  useEffect(() => {
    const userData: string | null = localStorage.getItem("userData");

    if (userData !== null) {
      setIsLogged(true);
      navigate("/dashboard/", { replace: true });
    }
  }, [setIsLogged, navigate]);
  
  return (
    <>
      <div className="home-animation">
        <div className="container">
          {!showImage ? (
            <div className="shape" style={{ animation: animationShape, }} />
          ) : (
            <img
              className="imageAnimationHome"
              src={ImgMainJnunes}
              alt="Imagem"
              style={{
                animation: animationImg,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}