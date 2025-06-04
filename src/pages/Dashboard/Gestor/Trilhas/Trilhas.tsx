import { useEffect, useState } from "react";
import "../../../../styles/dashboard/gestor/Trilhas.css";
import { app } from "../../../../config/Axios.config";
import ButtonCriarTrilhas from "../../../../images/buttonCriarTrilhas.svg";
import { Link } from "react-router";
import { AxiosResponse } from "axios";
import { Trilhas as TrilhasModel } from "../../../../models/Trilhas.model";

export default function Trilhas() {
  const [trilhas, setTrilhas] = useState<[TrilhasModel]>();
  const [erroGetTrilhas, setErroGetTrilhas] = useState<boolean>(false);

  useEffect(() => {
    app.get("/trilhas").then((res: AxiosResponse<[TrilhasModel]>) => {
      // console.log(res.data);
      setTrilhas(res.data);
    }).catch(() => {
      setErroGetTrilhas(true);
    });
  }, []);

  return (
    <>
      <div className="container-trilhas">
        <div className="top-trilhas">
          <div className="elements-top-trilhas">
            <div className="text-top-trilhas">
              <p>Trilhas</p>
            </div>
            <div className="btns-top-trilhas">
              <Link to="/dashboard/gestor/trilhas/novatrilha"><img src={ButtonCriarTrilhas} alt="btn" /></Link>
            </div>
          </div>
          <div className="linha-top-trilhas">

          </div>
        </div>
        <div className="main-trilhas">
          {erroGetTrilhas ? (
            <p>Erro ao buscar trilhas, se perssistir contate um administrador</p>
          ) : (
            <>
              {trilhas?.map(val => {
                return (
                  <>
                    <div className="trilha-box">
                      <div className="trilha-box-top">

                      </div>
                      <div className="trilha-box-main">
                        <p>
                          {val.titulo}
                        </p>
                      </div>
                    </div>
                  </>
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}