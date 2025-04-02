import "../styles/Login.css";
import { useEffect, useState } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

interface LoginProps {
  isOpenLogin: boolean;
  onCloseLogin: () => void;
}

export default function Login() {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

    // Adiciona o link ao head do documento
    document.head.appendChild(link);

    // Função de limpeza para remover o link quando o componente for desmontado
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div>
        {/* <Button color="danger" onClick={toggle}>X</Button>
        <Modal isOpen={modal} toggle={toggle} className="">
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
      </div>
    </>
  );
}