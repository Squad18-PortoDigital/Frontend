import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
// import Login from "./Login";
import "../styles/Main.css";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import { useAtom } from "jotai";
import { PerfilUser } from "../utils/Globals.utils";
import { Fab, Box, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

export default function Main() {
  const [perfilUser, ] = useAtom(PerfilUser);
  const [perfil, setPerfil] = useState<string>("");;
  const [open, setOpen] = useState(false);

  const toggleChat = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    setPerfil(perfilUser);
  }, [perfilUser]);

  return (
    <>
      <main>
        <div className={perfil === "aluno" ? "chatbot-enabled" : "chatbot-disabled"}>
          <Fab
            color="primary"
            onClick={toggleChat}
            sx={{
              position: 'fixed',
              bottom: 100,
              right: 25,
              zIndex: 1000
            }}
          >
            <ChatIcon />
          </Fab>

          {open && (
            <Box
              sx={{
                position: 'fixed',
                bottom: 80,
                right: 16,
                width: 350,
                height: 500,
                border: '1px solid #ccc',
                borderRadius: 2,
                boxShadow: 4,
                zIndex: 1001,
                backgroundColor: '#fff',
                overflow: 'hidden'
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton style={{position: "fixed"}} size="small" onClick={toggleChat}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <iframe
                src="https://www.chatbase.co/chatbot-iframe/-HZhYKMRXP8TlPdNkgT_o"
                frameBorder="0"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                title="Chatbot"
              ></iframe>

            </Box>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}