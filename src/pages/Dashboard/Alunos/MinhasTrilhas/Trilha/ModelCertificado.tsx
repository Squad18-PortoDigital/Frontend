import { Box, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import "../../../../../styles/dashboard/aluno/ModalCertificado.css";

interface modalCertificado {
  openModal: boolean;
  setOpenModal: Function;
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

export default function ModalCertificado({ openModal, setOpenModal }: modalCertificado) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpenModal(!openModal);

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
          <p>Modal Certificado</p>
        </Box>
      </Modal>
    </>
  )
}