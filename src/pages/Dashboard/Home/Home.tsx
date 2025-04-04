import { useEffect } from "react";
// import "../../../styles/dashboard/Home.css";
import fundoDashboard from "../../../images/fundoDashboard.png";

export default function HomeDashboard() {

  useEffect(() => {
    const style = document.createElement('style');
    /*
      @media (min-width: 768px) {
        main {
          padding: 12em 2% 2% 2%;
        }

        .header {
          height: 0;
        }
      }
    */
    style.innerHTML = `
      main {
        background: url(${fundoDashboard});
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
      <p>Home Dashboard</p>
    </>
  );
}