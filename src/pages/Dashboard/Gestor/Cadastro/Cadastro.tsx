import { useEffect, useState } from "react";
import SidebarGestor from "../../../../components/SidebarGestor";
import "../../../../styles/dashboard/gestor/Cadastro.css";
import { app } from "../../../../config/Axios.config";
import { AccessToken } from "../../../../utils/Globals.utils";
import { useAtom } from "jotai";

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    password: '',
    nivel: '',
    foto: null as File | null,
  });
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [TokenUser,] = useAtom(AccessToken);
  const [ButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'foto' && 'files' in e.target) {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        setFormData({ ...formData, foto: files[0] });

        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(files[0]);
      } else {
        setFormData({ ...formData, foto: null });
        setPhotoPreviewUrl(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    app.post("/usuarios/", {
      ...formData
    }, {
      headers: {
        Authorization: `Bearer ${TokenUser}`
      }
    }).then(res => {
      alert("Usuário cadastrado com sucesso ao sistema.");
      setFormData({
        matricula: "",
        nivel: "",
        nome: "",
        password: "",
        foto: null,
      })
    }).catch(err => {
      alert("Falha ao cadastrar usuário, verifique a matrícula e a senha precisa ter no minímo seis digitos.");
    });
  };

  useEffect(() => {
    if ((formData.password.length >= 6) && (formData.nome !== "") && (formData.nivel !== "") && (formData.matricula !== "")) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  useEffect(() => {

    const mainElement = document.querySelector('main');

    if (mainElement) {
      mainElement.style.padding = '0';
    }
    return () => {
      if (mainElement) {
        mainElement.style.padding = '';
      }
    };
  }, []);

  return (
    <>
      <div className="flex h-full">
        <SidebarGestor />

        <div className="content-area-wrapper">
          <div className="cadastro-container">
            <h2 className="cadastro-titulo">Cadastro</h2>
            <form onSubmit={handleSubmit} className="cadastro-formulario">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nomeCompleto">Nome Completo do Usuário</label>
                  <input
                    type="text"
                    id="nomeCompleto"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite o nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="matricula">Matrícula</label>
                  <input
                    type="text"
                    id="matricula"
                    name="matricula"
                    value={formData.matricula}
                    onChange={handleChange}
                    placeholder="Digite a matrícula"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      id="senha"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Digite a senha"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="nivel">Nível</label>
                    <select
                      id="nivel"
                      name="nivel"
                      value={formData.nivel}
                      onChange={handleChange}
                    >
                      <option value="">Selecione</option>
                      <option value="admin">ADM</option>
                      <option value="instrutor">Instrutor</option>
                      <option value="aluno">Aluno</option>
                    </select>
                  </div>
                </div>

                <div className="photo-upload-container">
                  <div className="photo-upload-section">
                    <label className="photo-upload-label-text">
                      Adicionar foto de perfil <span className="text-xs text-red-500">*opcional</span>
                    </label>
                    <label htmlFor="profilePhotoInput" className="photo-preview-box">
                      {photoPreviewUrl ? (
                        <img src={photoPreviewUrl} alt="Pré-visualização da foto de perfil" />
                      ) : (
                        <span className="plus-icon-centered"></span>
                      )}
                      <input
                        type="file"
                        id="profilePhotoInput"
                        name="foto"
                        accept="image/*"
                        onChange={handleChange}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>
              </div>



              <button type="submit" className="btn-salvar" disabled={ButtonDisabled}>
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cadastro;