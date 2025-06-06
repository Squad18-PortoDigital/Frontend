import "../../../styles/Recuperacao.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useAtom } from "jotai";
import { ModalRecuperacaoLogin } from "../../../utils/Globals.utils";
import logoRecuperacao from "../../../images/logo-recuperacao-jotanunes.png";

// interface Recuperacao {

// }

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
};

export default function EsqueciSenha() {
  const [ModalRecuperacao, setModalRecuperacao] = useAtom(
    ModalRecuperacaoLogin
  );

  const handleClose = () => setModalRecuperacao(false);

  return (
    <Modal
      open={ModalRecuperacao}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="esqueci-senha-container">
          <div className="recuperacao-container">
            <div className="recuperacao-matricula">
              <h1>Minha Matricula</h1>
              <div className="recuperacao-matricula-container">
                <h2>Recuperação de Senha</h2>
                <p>
                  O e-mail de recuperação de senha será enviado para:
                  alf******u99@gmail.com
                </p>
                <p>
                  Se este for o seu e-mail, clique em <strong>CONFIRMAR</strong>
                  para que o e-mail de recuperação de senha seja enviado.
                </p>
                <div className="recuperacao-buttons">
                  <button onClick={handleClose}>Voltar</button>
                  <button onClick={handleClose}>
                    <strong>Confirmar</strong>
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="recuperacao-detalhamento">
              <h1>
                <strong>Recuperação de Senha</strong>
              </h1>
              <p>
                Caso não se lembre, ou não possua mais acesso a este e-mail,
                favor entrar em contato com a coordenação da escola para
                alterá-lo.
              </p>
              <img
                className="recuperacao-jotanunes-logo"
                src={logoRecuperacao}
                alt="JotaNunes-Logo"
              />
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
