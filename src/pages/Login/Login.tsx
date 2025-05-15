import { Button, Grid, IconButton, InputAdornment, TextField} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "../../styles/LoginPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { StateLogin, RouterHomeLogoff } from "../../utils/Globals.utils";
import logoHeaderJN from "../../images/logo-header-jotanunes.png";
// import mascoteJotinha from "../../images/jotinhaMascote.svg";
import React from "react";
import { useAtom } from "jotai";
import { LoginModel } from "../../models/Login.model";
import { jotinhaMascote } from "../../images";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function Login() {
  // const [openLogin, setOpenLogin] = useState(false);
  const [buttonDisable, setButtonDiable] = useState(true);
  const [, setIsLogged] = useAtom(StateLogin);
  const [, setRouterHome] = useAtom(RouterHomeLogoff);

  const navigate = useNavigate();

  // Login
  const [email, setEmail] = useState<string>('');
  const [matricula, setMatricula] = useState<number | null>(null);
  const [senha, setSenha] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; senha: string }>({
    email: '',
    senha: '',
  });
  const [values, setValues] = useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validateMatricula = (matricula: number | null) => {
    if (matricula !== null) {
      return true;
    } else {
      return false;
    }
  };

  const validateSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let emailError: string = '';
    let senhaError: string = '';

    if (!validateSenha(senha)) {
      senhaError = 'A senha deve ter no mínimo 6 caracteres!';
    }

    setErrors({
      email: emailError,
      senha: senhaError,
    });

    if (!emailError && !senhaError) {

      // sofrerá modificação futura

      // const userData: UserModel = {
      //   id: 235,
      //   nome: "Luan",
      //   matricula: 956253,
      //   perfil: 1,
      // }

      const token: LoginModel = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM1LCJub21lIjoiTHVhbiIsIm1hdHJpY3VsYSI6OTU2MjUzLCJwZXJmaWwiOjF9.KGrdBcYJteyuvLF5OG-5TyGC1tftlpMijnxmeN4gu_M",
      }
      
      // sofrerá modificação futura

      setIsLogged(true);
      localStorage.setItem("token", JSON.stringify(token.token));
      navigate("/dashboard/");
    }
  };

  useEffect(() => {
    if ((validateEmail(email) || validateMatricula(matricula)) && validateSenha(senha)) {
      setButtonDiable(false);
    } else {
      setButtonDiable(true);
    }
  }, [email, senha, matricula]);

  useEffect(() => {
    setRouterHome(false);

    const mainElement = document.querySelector('main');

    if (mainElement) {
      mainElement.style.padding = '0';
    }

    return () => {
      if (mainElement) {
        mainElement.style.padding = '';
      }
    };
  }, [setRouterHome]);
  
  return (
    <>
      <div className="container-login" >
        <div className="sub-container-login">
          <img className="mascoteJotinha" src={jotinhaMascote} alt="mascote" />
          <form onSubmit={handleSubmit}>
            <Grid className="FormInputs" container spacing={2}>
              <div className="FormLogo">
                <img src={logoHeaderJN} alt="logo"/>
              </div>
              
              <Grid className="InputsText" container>
                <Grid>
                  <TextField
                    label="Matrícula ou E-mail"
                    type="text"
                    fullWidth
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if ((/[^0-9]/.test(e.target.value) === false) && (e.target.value !== "")) {
                        setMatricula(Number(e.target.value));
                      } else {
                        setMatricula(null);
                      };
                    }}
                    error={!!errors.email}
                    helperText={errors.email}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                    required
                  />
                </Grid>

                <Grid>
                  <TextField
                    label="Senha"
                    type={values.showPassword ? 'text' : 'password'}
                    fullWidth
                    value={senha}
                    onChange={(e) => {
                      setSenha(e.target.value);
                      handleChange('password');
                    }}
                    error={!!errors.senha}
                    helperText={errors.senha}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment className="visibility-pass-login" position="end">
                            <IconButton
                              size="small"
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <VisibilityOff fontSize="small" />
                              ) : (
                                <Visibility fontSize="small" />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                    required
                  />
                </Grid>
              </Grid>

              <Grid className="container-btnRecover">
                <Button className="btnRecover">Esqueci minha senha</Button>
              </Grid>

              <Grid>
                <Button className="btnLogin" type="submit" variant="contained" disabled={buttonDisable} fullWidth>
                  Entrar
                </Button>
              </Grid>

            </Grid>
          </form>
        </div>
      </div >
    </>
  );
}