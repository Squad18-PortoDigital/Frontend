// Trilha.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundTrilha from "./backgroundTrilha.png";
import prancheta from "./prancheta.svg";
import Capacete from "./Capacete.png";
import LinhaL from "./LinhaL.png";
import Plataforma1 from "./Plataforma1.png";
import Boneco from "./Boneco.png";
import LinhaM from "./LinhaM.png";
import Plataforma2 from "./Plataforma2.png";
import PlacaPare from "./PlacaPare.png";
import MensagemPare from "./MensagemPare.png";
import Plataforma3 from "./Plataforma3.png";
import Plataforma4 from "./Plataforma4.png";
import Plataforma5 from "./Plataforma5.png";
import Certificado from "./Certificado.png";

import "./Trilha.css";

export default function Trilha() {
  const [ativo, setAtivo] = useState<number | null>(null);

  return (
    <section
      className="section"
      style={{ backgroundImage: `url(${backgroundTrilha})` }}
    >
      {/* Conteúdo sobre o fundo */}
      <div className="quadradoPrincipal">
        <div className="HeaderQuadrado">
          <img className="prancheta" src={prancheta} alt="prancheta" />
          <h1 className="LetraHeader" style={{ color: "white" }}>
            Trilha Segurança do Trabalho
          </h1>
        </div>

        <div className="MiniQuadrados">
          <div
            className={`Mini1 ${ativo === 1 ? "ativo" : ""}`}
            onClick={() => setAtivo(1)}
          >
            <h1 className="LetraMINI">Modulo 1: Introdução à Segurança do Trabalho</h1>
          </div>

          <div
            className={`Mini2 ${ativo === 2 ? "ativo" : ""}`}
            onClick={() => setAtivo(2)}
          >
            <h1 className="LetraMINI">Modulo 2: Prevenção e Controle de Sinistros</h1>
          </div>

          <div
            className={`Mini3 ${ativo === 3 ? "ativo" : ""}`}
            onClick={() => setAtivo(3)}
          >
            <h1 className="LetraMINI">Modulo 3: Normas e Segurança do Trabalho</h1>
          </div>

          <div
            className={`Mini3 ${ativo === 4 ? "ativo" : ""}`}
            onClick={() => setAtivo(3)}
          >
            <h1 className="LetraMINI">Modulo 4: Normas e Segurança do Trabalho II</h1>
          </div>

          <div
            className={`Mini3 ${ativo === 5 ? "ativo" : ""}`}
            onClick={() => setAtivo(3)}
          >
            <h1 className="LetraMINI">Modulo 5: Normas e Segurança do Trabalho III</h1>
          </div>
        </div>
      </div>

      {/* -------------------------------- Parte 2 -------------------------------- */}
      <div className="Margin">
        <div className="Trilha">
          <div className="QuadradoTrilha">
            <div className="CirculoCapaceteBlack">
              <div className="CirculoCapaceteWhite">
                <img className="Capacete" src={Capacete} alt="Capacete" />
                <h1 className="LetraTrilha">Trilha Segurança do Trabalho</h1>
              </div>
            </div>
          </div>

          <div className="Linhas">
            <img className="LinhaL" src={LinhaL} alt="LinhaL" />
            <img className="Plataforma1" src={Plataforma1} alt="Plataforma1" />
            <img className="Boneco" src={Boneco} alt="Boneco" />
            <img className="LinhaM" src={LinhaM} alt="LinhaM" />
            <img className="Plataforma2" src={Plataforma2} alt="Plataforma2" />
            <img className="LinhaM2" src={LinhaM} alt="LinhaM" />
            <img className="PlacaPare" src={PlacaPare} alt="PlacaPare" />
            <img className="MensagemPare" src={MensagemPare} alt="MensagemPare" />
            <img className="Plataforma3" src={Plataforma3} alt="Plataforma3" />
            <img className="LinhaM3" src={LinhaM} alt="LinhaM" />

            <div className="Linhas2">
              <img className="Plataforma4" src={Plataforma4} alt="Plataforma4" />
              <img className="LinhaM4" src={LinhaM} alt="LinhaM" />
              <img className="Plataforma5" src={Plataforma5} alt="Plataforma5" />
              <img className="LinhaM5" src={LinhaM} alt="LinhaM" />
              <img className="Certificado" src={Certificado} alt="Certificado" />
            </div>
          </div>
        </div>
      </div>

      {/* <Link to="/dashboard/alunos/minhastrilhas/trilha/aula">Aula 2</Link> */}
    </section>
  );
}
