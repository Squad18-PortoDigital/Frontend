import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { CertificateGenerator } from "./CertificateGenerator";
import "../../../../../styles/dashboard/aluno/ModalCertificado.css";

interface modalCertificado {
  openModal: boolean;
  setOpenModal: Function;
  nomeAluno?: string;
  nomeCurso?: string;
  dataFinalizacao?: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'transparent',
  boxShadow: 'none',
  outline: 'none',
};

export default function ModalCertificado({ 
  openModal, 
  setOpenModal, 
  nomeAluno = "Luiz Gomes",
  nomeCurso = "Curso de Desenvolvimento Web",
  dataFinalizacao = "11/06/2025"
}: modalCertificado) {
  const [open, setOpen] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleClose = () => setOpenModal(!openModal);

  const handleDownloadCertificate = async () => {
    setIsDownloading(true);
    
    try {
      await CertificateGenerator.downloadCertificate({
        nomeAluno,
        nomeCurso,
        dataFinalizacao
      });
    } catch (error) {
      alert('Erro ao baixar certificado. Tente novamente.');
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="container-modalCertificado">
          <button className="close-button" onClick={handleClose}>×</button>
          
          <div className="coins-container">
            <div className="coin">💰</div>
            <div className="coin">💰</div>
            <div className="coin">💰</div>
          </div>
          
          <h1 className="congratulations-title">Parabéns!!</h1>
          
          <p className="congratulations-text">
            Missão cumprida! Você completou sua jornada de aprendizado e está pronto para aplicar todo o conhecimento adquirido.
             Baixe seu certificado e celebre essa conquista!
          </p>
          
          
          <button 
            className="collect-button" 
            onClick={handleDownloadCertificate}
            disabled={isDownloading}
            title="Baixar Certificado"
          >
            Baixar
          </button>
        </Box>
      </Modal>
    </>
  )
}