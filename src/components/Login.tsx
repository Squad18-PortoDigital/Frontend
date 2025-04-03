import "../styles/Login.css";
import "../styles/index.css";
import { useEffect, useState } from 'react';
import { Box, Typography, Modal, TextField, Button, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

interface LoginProps {
  isOpenLogin: boolean;
  onCloseLogin: () => void;
}

export default function Login({ isOpenLogin, onCloseLogin }: LoginProps) {
  const [openLogin, setOpenLogin] = useState(false);
  const [buttonDisable, setButtonDiable] = useState(true);

  const navigate = useNavigate();

  // Login
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; senha: string }>({
    email: '',
    senha: '',
  });

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validateSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let emailError: string = '';
    let senhaError: string = '';

    if (!validateEmail(email)) {
      emailError = 'Email inválido!';
    }

    if (!validateSenha(senha)) {
      senhaError = 'A senha deve ter no mínimo 6 caracteres!';
    }

    setErrors({
      email: emailError,
      senha: senhaError,
    });

    if (!emailError && !senhaError) {
      // alert('Formulário enviado com sucesso!');
      // window.location.href = "/dashboard";

      const userData: object = {
        id: 235,
        nome: "Luan",
        matricula: 956253,
      }

      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/dashboard/", { replace: true });
      onCloseLogin();
    }
  };

  useEffect(() => {
    setOpenLogin(isOpenLogin);

    // limpeza dos campos
    setEmail("");
    setSenha("");
  }, [isOpenLogin]);

  useEffect(() => {
    if (validateEmail(email) && validateSenha(senha)) {
      setButtonDiable(false);
    } else {
      setButtonDiable(true);
    }
  }, [email, senha]);

  return (
    <>
      <Modal
        open={openLogin}
        onClose={() => {
          onCloseLogin();
        }}
      >
        <Box className="LoginForm">
          <div className="HeaderForm">
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <CloseIcon className="ButtonCloseForm" onClick={onCloseLogin} />
          </div>
          <form onSubmit={handleSubmit}>
            <Grid className="FormInputs" container spacing={2}>

              <Grid className="InputsText" container>
                <Grid>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>

                <Grid>
                  <TextField
                    label="Senha"
                    type="password"
                    fullWidth
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    error={!!errors.senha}
                    helperText={errors.senha}
                    required
                  />
                </Grid>
              </Grid>

              <Grid>
                <Button type="submit" variant="contained" disabled={buttonDisable} fullWidth>
                  Entrar
                </Button>
              </Grid>

            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}