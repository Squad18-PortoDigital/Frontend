import "../../../../styles/dashboard/gestor/ModalNovaTrilha.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { app } from "../../../../config/Axios.config";
import { NovaTrilha } from "../../../../models/Trilhas.model";
import { AccessToken } from "../../../../utils/Globals.utils";
import { useAtom } from "jotai";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';
import { Cursos } from "../../../../models/Cursos.model";
import LoadingComponent from "../../../../components/LoadingComponent";

interface modalNovaTrilha {
  openModal: boolean;
  setOpenModal: Function;
  getTrilhas: Function;
  setLoading: Function;
  cursos: [Cursos] | undefined;
  loadingModalNovaTrilha: boolean;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleTextTop = {
  color: "#D41D26",
  fontWeight: 600,
}

export default function ModalNovaTrilha({ openModal, setOpenModal, getTrilhas, setLoading, cursos, loadingModalNovaTrilha }: modalNovaTrilha) {
  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<number>(1);
  const [novaTrilha, setNovaTrilha] = useState<NovaTrilha>({
    titulo: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    descricao: "",
  });
  const [btnNovaTrilha, setBtnNovaTrilha] = useState<boolean>(true);
  const [TokenUser,] = useAtom(AccessToken);
  const [cursosTrilha, setCursosTrilha] = useState<[Cursos]>();
  const [LoadingModalNovaTrilha, setLoadingModalNovaTrilha] = useState<boolean>(false);

  // array vazio
  // const itensCursos = new Array(20).fill(null);

  const handleClose = () => setOpenModal(!openModal);

  const criarTrilha = async () => {
    if (novaTrilha.titulo !== "") {
      setLoading(true);
      app.post("/trilhas/", { ...novaTrilha }, {
        headers: {
          Authorization: `Bearer ${TokenUser}`,
        }
      }).then(res => {
        getTrilhas();
        setOption(2);
      }).catch(err => {
        alert("Erro ao criar nova Trilha.");
      });
    }
  }

  useEffect(() => {
    setOpen(openModal);

    return () => {
      setOption(1);
      setBtnNovaTrilha(true);
      setCursosTrilha(undefined);
    }
  }, [openModal]);

  useEffect(() => {
    if (novaTrilha.titulo.length >= 5) {
      setBtnNovaTrilha(false);
    } else {
      setBtnNovaTrilha(true);
    }
  }, [novaTrilha]);

  useEffect(() => {
    if (cursos !== undefined) {
      setOption(2)
      setCursosTrilha(cursos);
    }
  }, [cursos]);

  useEffect(() => {
    setLoadingModalNovaTrilha(loadingModalNovaTrilha);
  }, [loadingModalNovaTrilha]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="container-novaTrilha">
          {LoadingModalNovaTrilha ? (
            <LoadingComponent text="Carregando Conteúdo..." />
          ) : (
            <>
              <div className="top-novaTrilha">
                <div className="text-top-novaTrilha flex">
                  <p onClick={() => { setOption(1); }} style={option === 1 ? styleTextTop : {}}>Trilha</p>
                  <p onClick={() => { setOption(2); }} style={option === 2 ? styleTextTop : {}}>Conteúdo</p>
                </div>
                <div className="linha-top-novaTrilha">
                  <LinearProgress variant="determinate" color="inherit" value={0} sx={{
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#FF5733',
                    },
                  }} style={{ height: "2px" }} />
                </div>
              </div>
              {option === 1 ? (
                <div className="main-novaTrilha">
                  <div className="box-main-novaTrilha font-semibold p-5">
                    <div className="box-main-novaTrilha-top mb-8">
                      <p>Informações da Trilha</p>
                    </div>
                    <div className="box-main-novaTrilha-main">
                      <div className="mb-4">
                        <p className="ml-2">Título da Trilha</p>
                        <input
                          className="rounded-[8px] p-1 input-nome-novaTrilha"
                          type="text"
                          name="nomeTrilha"
                          id="nomeTrilha"
                          placeholder="Digite o nome da Trilha..."
                          onChange={(e) => {
                            setNovaTrilha((prevState) => ({
                              ...prevState,
                              titulo: e.target.value,
                            }));
                          }}
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <p className="ml-2">Descrição</p>
                          {/* <input className="rounded-[8px] input-descricao-novaTrilha" type="text" name="descricaoTrilha" id="descricaoTrilha" /> */}
                          <textarea
                            className="rounded-[8px] p-1 input-descricao-novaTrilha"
                            id="descricaoTrilha"
                            name="descricaoTrilha"
                            rows={5}
                            cols={33}
                            placeholder="Digite a descrição da Trilha..."
                            onChange={e => {
                              setNovaTrilha(prevState => ({
                                ...prevState,
                                descricao: e.target.value,
                              }));
                            }}
                          />
                        </div>
                        <div>
                          <p className="ml-2">Adicionar ícone</p>
                          <input
                            className="input-file-novaTrilha"
                            type="file"
                            name="iconeTrilha"
                            id="iconeTrilha"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="btn-main-novaTrilha" onClick={() => { criarTrilha() }} disabled={btnNovaTrilha}>Salvar</button>
                  </div>
                </div>
              ) : (
                <div className="main-conteudoTrilha">
                  <div className="box-main-conteudoTrilha">
                    {/* <p className="m-3">Em andamento</p> */}
                    <div className="subBox-main-conteudoTrilha-left">
                      <p className="font-semibold ml-3">Cursos</p>
                      <div className="subBox-main-conteudoTrilha-left-line"></div>
                      <div className="subBox-main-conteudoTrilha-left-addCurso">
                        <AddIcon />
                      </div>
                      <div className="subBox-main-conteudoTrilha-left-listaCursos">
                        {cursosTrilha?.map((val) => {
                          return (
                            <div key={val.id} className="subBox-main-conteudoTrilha-left-curso">
                              <p className="font-semibold">{val.titulo}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div className="subBox-main-conteudoTrilha-center">
                      <ArrowRightAltIcon />
                    </div>
                    <div className="subBox-main-conteudoTrilha-right">
                      <div>
                        <p className="font-semibold mb-2 ml-3">Título do Curso</p>
                        <input
                          className="rounded-[8px] p-1 input-nome-novoCurso"
                          type="text"
                          name="nomeCurso"
                          id="nomeCurso"
                          placeholder="Digite o nome do Curso.."
                        // onChange={(e) => {
                        //   setNovaTrilha((prevState) => ({
                        //     ...prevState,
                        //     titulo: e.target.value,
                        //   }));
                        // }}
                        />
                      </div>
                      <div>
                        <p className="font-semibold mb-3 ml-3">Aulas</p>
                        <p className="mb-1 ml-3">Nome da aula</p>
                        <input
                          className="rounded-[8px] p-1 input-nome-Aula"
                          type="text"
                          name="nomeAula"
                          id="nomeAula"
                          placeholder="Digite o nome da Aula.."
                        />
                        <p className="mb-1 ml-3">Descrição da aula</p>
                        <input
                          className="rounded-[8px] p-1 input-descricao-Aula"
                          type="text"
                          name="descricaoAula"
                          id="descricaoAula"
                          placeholder="Digite a descrição da Aula.."
                        />
                        <p className="mb-1 ml-3">Link do vídeo</p>
                        <input
                          className="rounded-[8px] p-1 input-linkVideo-Aula"
                          type="text"
                          name="linkVideo"
                          id="linkVideo"
                          placeholder="Link do Vídeo.."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}