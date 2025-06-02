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
import { app } from "../../config/Axios.config";
import { AxiosResponse } from "axios";
import { UserModel } from "../../models/User.model";

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
  const [matricula, setMatricula] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [errors, setErrors] = useState<{ matricula: string; senha: string }>({
    matricula: '',
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

  // const validateMatricula = (matricula: number | null) => {
  //   if (matricula !== null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const validateMatricula = (matricula: string) => {
    return matricula.length >= 10;
  };

  const validateSenha = (senha: string) => {
    return senha.length >= 6;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let matriculaError: string = '';
    let senhaError: string = '';

    if (!validateSenha(senha)) {
      senhaError = 'A senha deve ter no mínimo 6 caracteres!';
    }

    if (!validateMatricula(matricula)) {
      matriculaError = 'A matricula deve ter no mímino 10 números!';
    }

    setErrors({
      matricula: matriculaError,
      senha: senhaError,
    });

    if (!matriculaError && !senhaError) {

      // metodo login temporario
      // interface usuarios {
      //   matricula: string;
      //   refresh: string;
      //   token: string;
      //   id_usuario: number;
      //   nome: string;
      //   nivel: string;
      // }


      // const acessos: usuarios[] = [
      //   {
      //     matricula: "1231103318",
      //     refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0ODYyMzg1NywiaWF0IjoxNzQ4NTM3NDU3LCJqdGkiOiJhZTZhZjA5NmNkYTY0NGFjYjM4YWY5NDA5ZWI5ZmYzNiIsInVzZXJfaWQiOjE2fQ.0FCvFfgXfKVYUcL_cAH-3XB2rrsgNKOImTz_GpyFsCQ",
      //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ4NTQyODU3LCJpYXQiOjE3NDg1Mzc0NTcsImp0aSI6IjZiMTQ2MDYxNmNiYjRiYTk4MGZjNWRhOTEyZmNmMjI2IiwidXNlcl9pZCI6MTZ9.baoWdJcPRVsdlUpj1cpd5DtDPn_p6i6RcMmPDYdt9tk",
      //     id_usuario: 16,
      //     nome: "hugo",
      //     nivel: "instrutor",
      //   },
      //   {
      //     matricula: "1231103319",
      //     refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0ODYyMzg1NywiaWF0IjoxNzQ4NTM3NDU3LCJqdGkiOiJhZTZhZjA5NmNkYTY0NGFjYjM4YWY5NDA5ZWI5ZmYzNiIsInVzZXJfaWQiOjE2fQ.0FCvFfgXfKVYUcL_cAH-3XB2rrsgNKOImTz_GpyFsCQ",
      //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ4NTQyODU3LCJpYXQiOjE3NDg1Mzc0NTcsImp0aSI6IjZiMTQ2MDYxNmNiYjRiYTk4MGZjNWRhOTEyZmNmMjI2IiwidXNlcl9pZCI6MTZ9.baoWdJcPRVsdlUpj1cpd5DtDPn_p6i6RcMmPDYdt9tk",
      //     id_usuario: 17,
      //     nome: "hugo",
      //     nivel: "aluno",
      //   },
      //   {
      //     matricula: "1231103320",
      //     refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0ODYyMzg1NywiaWF0IjoxNzQ4NTM3NDU3LCJqdGkiOiJhZTZhZjA5NmNkYTY0NGFjYjM4YWY5NDA5ZWI5ZmYzNiIsInVzZXJfaWQiOjE2fQ.0FCvFfgXfKVYUcL_cAH-3XB2rrsgNKOImTz_GpyFsCQ",
      //     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ4NTQyODU3LCJpYXQiOjE3NDg1Mzc0NTcsImp0aSI6IjZiMTQ2MDYxNmNiYjRiYTk4MGZjNWRhOTEyZmNmMjI2IiwidXNlcl9pZCI6MTZ9.baoWdJcPRVsdlUpj1cpd5DtDPn_p6i6RcMmPDYdt9tk",
      //     id_usuario: 18,
      //     nome: "hugo",
      //     nivel: "gestor",
      //   }
      // ]

      // acessos.forEach(val => {

      //   if (val.matricula === matricula) {
      //     setIsLogged(true);
      //     localStorage.setItem("user", JSON.stringify(val));
      //     navigate("/dashboard/");
      //   }

      // });
      // metodo login temporario

      const login: LoginModel = {
        matricula: matricula,
        password: senha,
      }

      app.post("/login/", {
        ...login
      }).then((result: AxiosResponse<UserModel>) => {
        // console.log(result.data);
        setIsLogged(true);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/dashboard/");
      }).catch(err => {
        alert("Erro ao realizar Login");
      });
    }
  };

  useEffect(() => {
    if (validateMatricula(matricula) && validateSenha(senha)) {
      setButtonDiable(false);
    } else {
      setButtonDiable(true);
    }
  }, [senha, matricula]);

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
                    label="Matrícula"
                    type="text"
                    fullWidth
                    value={matricula}
                    onChange={(e) => {
                      // if ((/[^0-9]/.test(e.target.value) === false) && (e.target.value !== "")) {
                      //   setMatricula(Number(e.target.value));
                      // } else {
                      //   setMatricula(null);
                      // };
                      setMatricula(e.target.value);
                    }}
                    error={!!errors.matricula}
                    helperText={errors.matricula}
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