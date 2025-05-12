import { useEffect, useState } from "react";
import "../../../../styles/dashboard/gestor/Loja.css";
import { imageExemploLoja } from "../../../../images";
import SidebarGestor from "../../../../components/SidebarGestor";


export default function Loja() {
  const [count, ] = useState<Array<any>>([0, 1, 2, 3 ,4 , 5, 6]);

  useEffect(() => {

  }, []);

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
      <div className="container-loja flex">
        {/* <div className="sidebar-loja">

        </div> */}
        <SidebarGestor />
        <div className="main-loja">
          {count.map((element, index) => {
            return (
              <div className="item-loja" key={index}>
                <div className="item-loja-top">
                  <img src={imageExemploLoja} alt="exemplo" />
                </div>
                <div className="item-loja-bottom">
                  <p>
                    Resort JotaNunes
                  </p>
                  <p>
                    40 JCoins
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}