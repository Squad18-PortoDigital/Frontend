import "../../../../styles/dashboard/gestor/ModalNovaTrilha.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { app } from "../../../../config/Axios.config";
import { NovaTrilha } from "../../../../models/Trilhas.model";
import { AccessToken } from "../../../../utils/Globals.utils";
import { useAtom } from "jotai";

interface modalNovaTrilha {
  openModal: boolean;
  setOpenModal: Function;
  getTrilhas: Function;
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

export default function ModalNovaTrilha({ openModal, setOpenModal, getTrilhas }: modalNovaTrilha) {
  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<number>(1);
  const [novaTrilha, setNovaTrilha] = useState<NovaTrilha>({
    titulo: "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    descricao: "",
  });
  const [btnNovaTrilha, setBtnNovaTrilha] = useState<boolean>(true);
  const [TokenUser, ] = useAtom(AccessToken);

  const handleClose = () => setOpenModal(!openModal);

  const criarTrilha = async () => {
    if (novaTrilha.titulo !== "") {
      app.post("/trilhas/", {...novaTrilha}, {
        headers: {
          Authorization: `Bearer ${TokenUser}`,
        }
      }).then(res => {
        console.log(res);
        getTrilhas();
      }).catch(err => {
        console.log(err);
      });
    }
  }

  useEffect(() => {
    setOpen(openModal);

    return () => {
      setOption(1);
      setBtnNovaTrilha(true);
    }
  }, [openModal]);

  useEffect(() => {
    if (novaTrilha.titulo.length >= 5) {
      setBtnNovaTrilha(false);
    } else {
      setBtnNovaTrilha(true);
    }
  }, [novaTrilha]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="container-novaTrilha">
          <div className="top-novaTrilha">
            <div className="text-top-novaTrilha flex">
              <p onClick={() => {setOption(1);}} style={option === 1 ? styleTextTop : {}}>Trilha</p>
              <p onClick={() => {setOption(2);}} style={option === 2 ? styleTextTop : {}}>Conteúdo</p>
            </div>
            <div className="linha-top-novaTrilha">
              <LinearProgress variant="determinate" color="inherit" value={0} sx={{
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#FF5733',
                },
              }} style={{height: "2px"}} />
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
                <button className="btn-main-novaTrilha" onClick={() => {criarTrilha()}} disabled={btnNovaTrilha}>Salvar</button>
              </div>
            </div>
          ) : (
            <div className="main-conteudoTrilha">
              <div className="box-main-conteudoTrilha">
                <p className="m-3">Em andamento</p>
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}