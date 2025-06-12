import { useEffect, useState } from "react";
import "../../../../styles/dashboard/gestor/Trilhas.css";
import { app } from "../../../../config/Axios.config";
import ButtonCriarTrilhas from "../../../../images/buttonCriarTrilhas.svg";
import { AxiosResponse } from "axios";
import { Trilhas as TrilhasModel } from "../../../../models/Trilhas.model";
import { IconBoxTopTrilhas, IconJcoinTrilhas, IconRelogioTrilhas } from "../../../../images";
import LoadingComponent from "../../../../components/LoadingComponent";
import ModalNovaTrilha from "./ModalNovaTrilha";
import { Cursos } from "../../../../models/Cursos.model";

export default function Trilhas() {
  const [trilhas, setTrilhas] = useState<[TrilhasModel]>();
  const [erroGetTrilhas, setErroGetTrilhas] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [openNovaTrilha, setOpenNovaTrilha] = useState<boolean>(false);
  const [cursos, setCursos] = useState<[Cursos]>();
  const [LoadingModalNovaTrilha, setLoadingModalNovaTrilha] = useState<boolean>(false);

  const getTrilhas = async () => {
    return app.get("/trilhas").then((res: AxiosResponse<[TrilhasModel]>) => {
      setTrilhas(res.data);
    }).finally(() => {
      setLoading(false);
    });
  }

  const getCursosTrilha = async (trilhaId: number) => {
    return app.get(`/trilhas/${trilhaId}/cursos/`);
  }

  useEffect(() => {
    getTrilhas().catch(() => {
      setErroGetTrilhas(true);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className={`container-trilhas ${loading ? "h-[inherit]" : "h-full"}`}>
        <div className="top-trilhas">
          <div className="elements-top-trilhas">
            <div className="text-top-trilhas">
              <p>Trilhas</p>
            </div>
            <div className="btns-top-trilhas">
              {/* <Link to="/dashboard/gestor/trilhas/novatrilha"><img src={ButtonCriarTrilhas} alt="btn" /></Link> */}
              <img onClick={() => {setOpenNovaTrilha(!openNovaTrilha)}} src={ButtonCriarTrilhas} alt="btn" />
            </div>
          </div>
          <div className="linha-top-trilhas">
            {/* adicionar linha separando a nav do main */}
          </div>
        </div>
        <div className="main-trilhas">
          <ModalNovaTrilha
            openModal={openNovaTrilha}
            setOpenModal={setOpenNovaTrilha}
            getTrilhas={getTrilhas}
            setLoading={setLoading}
            cursos={cursos}
            loadingModalNovaTrilha={LoadingModalNovaTrilha}
          />
          {erroGetTrilhas ? (
            <p>Erro ao buscar trilhas, se perssistir contate um administrador</p>
          ) : (
            <>
              {loading ? (
                <LoadingComponent text="Carregando..." />
              ) : (
                <>
                  {trilhas?.map((val, index) => {
                    return (
                      <div 
                        className="trilha-box" 
                        key={index}
                        onClick={() => {
                          setLoadingModalNovaTrilha(true);
                          setOpenNovaTrilha(true);
                          getCursosTrilha(val.id).then((res: AxiosResponse<[Cursos]>) => {
                            setCursos(res.data);
                            setLoadingModalNovaTrilha(false);
                          }).catch(err => {
                            alert("Erro ao buscar Cursos da Trilha.");
                            setLoadingModalNovaTrilha(false);
                          });
                        }}
                      >
                        <div className="trilha-box-top">
                          <img src={IconBoxTopTrilhas} alt="icon top" />
                        </div>
                        <div className="trilha-box-main">
                          <p className="font-semibold text-[1em]">
                            {val.titulo}
                          </p>
                          <div className="">
                            <p className="text-[0.7em]">
                              Criado por {val.criador_nome}
                            </p>
                            <div className="flex">
                              <div className="flex mr-3">
                                <img className="mr-1 w-5" src={IconRelogioTrilhas} alt="icon relogio" />
                                <p className="text-[0.8em] flex flex-col justify-end">
                                  {val.duracao_total}h
                                </p>
                              </div>
                              <div className="flex">
                                <img className="mr-1 w-7" src={IconJcoinTrilhas} alt="icon jcoin" />
                                <p className="text-[0.8em] font-semibold flex flex-col justify-center">
                                  {val.jcoins} Jcoin
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}