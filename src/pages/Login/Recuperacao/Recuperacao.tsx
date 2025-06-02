import "./EsqueciSenha.css";

export default function EsqueciSenha() {
  return (
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
              Se este for o seu e-mail, clique em <strong>CONFIRMAR</strong>{" "}
              para que o e-mail de recuperação de senha seja enviado.
            </p>
            <button>Voltar</button>
          </div>
        </div>
        <hr />
        <div className="recuperacao-detalhamento">
          <h1>
            <strong>Recuperação de Senha</strong>
          </h1>
          <p>
            Caso não se lembre, ou não possua mais acesso a este e-mail, favor
            entrar em contato com a coordenação da escola para alterá-lo.
          </p>
          <img
            className="recuperacao-jotanunes-logo"
            src="/jotanunes-logo.png"
            alt="JotaNunes-Logo"
          />
        </div>
      </div>
    </div>
  );
}
