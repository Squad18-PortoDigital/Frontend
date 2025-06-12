import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import backgroundTrilha from "./backgroundTrilha.png";
import prancheta from "./prancheta.svg";
import Capacete from "./Capacete.png";
import LinhaL from "./LinhaL.png";
import Boneco from "./Boneco.png";
import LinhaM from "./LinhaM.png";
import Plataforma1 from "./Plataforma1.png";
import Plataforma2 from "./Plataforma2.png";
import PlacaPare from "./PlacaPare.png";
import MensagemPare from "./MensagemPare.png";
import Plataforma3 from "./Plataforma3.png";
import Plataforma4 from "./Plataforma4.png";
import Plataforma5 from "./Plataforma5.png";
import Certificado from "./Certificado.png";

import "../../../../../styles/dashboard/aluno/Trilha.css";

export default function Trilha() {
  const [expandedModules, setExpandedModules] = useState<{[key: string]: boolean}>({});
  const [selectedSection, setSelectedSection] = useState<string>('trilha');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
    setSelectedSection(moduleId);
  };

  const selectSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    if (sectionId === 'trilha') {
      setExpandedModules({});
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  useEffect(() => {
    const mainElement = document.querySelector("main");
    
    if (mainElement) {
      mainElement.style.padding = "0";
    }
    
    return () => {
      if (mainElement) {
        mainElement.style.padding = "";
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-1/2 transform -translate-y-1/2 z-50 bg-red-600 text-white p-2 rounded-r-lg shadow-lg transition-all duration-300 hover:bg-red-700 ${
          sidebarCollapsed ? 'left-0' : 'left-72'
        }`}
        aria-label={sidebarCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
        title={sidebarCollapsed ? "Expandir sidebar" : "Recolher sidebar"}
      >
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${sidebarCollapsed ? 'rotate-0' : 'rotate-180'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:relative z-40
        h-full bg-white shadow-lg
        transform transition-all duration-300 ease-in-out
        ${sidebarCollapsed ? 'w-0 -translate-x-full lg:translate-x-0' : 'w-72'}
      `}>
        {/* Header da Sidebar */}
        <div className={`bg-red-600 text-white p-4 mt-16 lg:mt-16 overflow-hidden ${sidebarCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="flex items-center gap-2">
            <img 
              src={prancheta} 
              alt="Prancheta" 
              className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
            />
            <div className="min-w-0">
              <div className="text-white font-medium text-sm sm:text-base leading-[21px] truncate"
                    style={{
                      textShadow: '1px 4px 5px rgba(0, 0, 0, 0.25)',
                      fontFamily: 'Poppins'
                    }}>
                  Segurança do Trabalho
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className={`p-4 overflow-y-auto max-h-[calc(100vh-200px)] ${sidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-all duration-300`}>
          {/* Módulo 1 */}
          <div className={`mb-4 ${selectedSection === 'modulo1' ? 'bg-red-50 border-l-4 border-red-600 rounded' : ''}`}>
            <div className="p-3 cursor-pointer" onClick={() => toggleModule('modulo1')}>
              <div className="text-gray-800 font-medium text-sm sm:text-base leading-[21px]"
                    style={{
                      textShadow: '1px 4px 5px rgba(0, 0, 0, 0.25)',
                      fontFamily: 'Poppins'
                    }}>
                  Módulo 1: Introdução à Segurança do Trabalho
              </div>
            </div>

            <div className="ml-4 px-3 pb-3 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
              <span 
                className="w-3 h-3 bg-gray-400 rounded-sm transition-transform duration-300 ease-in-out"
                style={{
                  transform: expandedModules['modulo1'] ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              ></span>
              04 Aulas
            </div>

            {/* Aulas do Módulo 1 */}
            <div className={`ml-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedModules['modulo1'] ? 'max-h-48 pb-3' : 'max-h-0'}`}>
              <Link to="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 1: Introdução à Segurança do Trabalho
              </Link>
              <Link to="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 2: Equipamentos de Proteção Individual
              </Link>
              <Link to="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 3: Normas Regulamentadoras
              </Link>
              <Link to="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 4: Prevenção de Acidentes
              </Link>
            </div>
          </div>

          {/* Módulo 2 */}
          <div className={`mb-4 ${selectedSection === 'modulo2' ? 'bg-red-50 border-l-4 border-red-600 rounded' : ''}`}>
            <div className="p-3 cursor-pointer" onClick={() => toggleModule('modulo2')}>
              <div className="text-gray-800 font-medium text-sm sm:text-base leading-[21px]"
                    style={{
                      textShadow: '1px 4px 5px rgba(0, 0, 0, 0.25)',
                      fontFamily: 'Poppins'
                    }}>
                Módulo 2: Prevenção e Controle de Sinistros
              </div>
            </div>

            <div className="ml-4 px-3 pb-3 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
              <span 
                className="w-3 h-3 bg-gray-400 rounded-sm transition-transform duration-300 ease-in-out"
                style={{
                  transform: expandedModules['modulo2'] ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              ></span>
              05 Aulas
            </div>

            {/* Aulas do Módulo 2 */}
            <div className={`ml-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedModules['modulo2'] ? 'max-h-52 pb-3' : 'max-h-0'}`}>
              <a href="#" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 1: Prevenção de Sinistros
              </a>
              <a href="#" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 2: Controle de Riscos
              </a>
              <a href="#" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 3: Análise de Acidentes
              </a>
              <a href="#" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 4: Medidas Preventivas
              </a>
              <a href="#" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 5: Gestão de Emergências
              </a>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className={`mb-4 ${selectedSection === 'modulo3' ? 'bg-red-50 border-l-4 border-red-600 rounded' : ''}`}>
            <div className="p-3 cursor-pointer opacity-50">
              <div className="text-gray-400 font-medium text-sm sm:text-base leading-[21px]"
                    style={{ fontFamily: 'Poppins' }}>
                Módulo 3: Normas e Segurança do Trabalho
              </div>
            </div>
            <div className="ml-4 px-3 pb-3 text-xs text-gray-400 flex items-center gap-2">
              <span>🔒</span>
              Bloqueado
            </div>
          </div>

          {/* Módulo 4 */}
          <div className={`mb-4 ${selectedSection === 'modulo4' ? 'bg-red-50 border-l-4 border-red-600 rounded' : ''}`}>
            <div className="p-3 cursor-pointer opacity-50">
              <div className="text-gray-400 font-medium text-sm sm:text-base leading-[21px]"
                    style={{ fontFamily: 'Poppins' }}>
                Módulo 4: Normas e Segurança do Trabalho II
              </div>
            </div>
            <div className="ml-4 px-3 pb-3 text-xs text-gray-400 flex items-center gap-2">
              <span>🔒</span>
              Bloqueado
            </div>
          </div>

          {/* Módulo 5 */}
          <div className={`mb-4 ${selectedSection === 'modulo5' ? 'bg-red-50 border-l-4 border-red-600 rounded' : ''}`}>
            <div className="p-3 cursor-pointer opacity-50">
              <div className="text-gray-400 font-medium text-sm sm:text-base leading-[21px]"
                    style={{ fontFamily: 'Poppins' }}>
                Módulo 5: Normas e Segurança do Trabalho III
              </div>
            </div>
            <div className="ml-4 px-3 pb-3 text-xs text-gray-400 flex items-center gap-2">
              <span>🔒</span>
              Bloqueado
            </div>
          </div>

          {/* Quiz Section */}
          <div className={`cursor-pointer ${selectedSection === 'quiz' ? 'bg-red-50 border-l-4 border-red-600 p-3 rounded' : 'p-3'}`} onClick={() => selectSection('quiz')}>
            <Link to="/dashboard/aluno/minhastrilhas/trilha/quiz" className="flex items-center gap-2 text-red-700">
              <span className="w-4 h-4 bg-red-600 rounded-sm"></span>
              <div>
                <div className="font-medium text-xs sm:text-sm">Quiz - Segurança do Trabalho</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 relative transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>
        <section
          className="min-h-screen relative"
          style={{ 
            backgroundImage: `url(${backgroundTrilha})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Conteúdo da trilha - VERSÃO RESPONSIVA */}
          <div className="pt-16 lg:pt-8 relative overflow-hidden">
            
            {/* Container principal da trilha */}
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24">
              
              {/* Header da Trilha */}
              <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-4xl mx-auto">
                  <div className="flex items-center gap-4">
                    {/* Círculo do capacete */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                        <img 
                          src={Capacete} 
                          alt="Capacete"
                          className="w-8 h-6 sm:w-10 sm:h-8 object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Título */}
                    <h1 className="text-red-700 font-semibold text-lg sm:text-xl lg:text-2xl font-['Poppins']"
                        style={{ textShadow: '1px 4px 5px rgba(0, 0, 0, 0.25)' }}>
                      Trilha Segurança do Trabalho
                    </h1>
                  </div>
                </div>
              </div>

              {/* Layout responsivo - Mobile/Tablet (vertical) */}
              <div className="xl:hidden flex flex-col items-center space-y-8 sm:space-y-12 lg:space-y-16 pb-16">
                
                {/* Módulo 1 - Ativo */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img 
                      src={Plataforma1} 
                      alt="Plataforma 1"
                      className="w-22 h-22 sm:w-24 sm:h-20 lg:w-32 lg:h-24 object-contain"
                    />
                    <img 
                      src={Boneco} 
                      alt="Boneco"
                      className="absolute -top-4 left-1/2 mt-12 transform -translate-x-1/2 w-14 h-18 sm:w-10 sm:h-16 lg:w-12 lg:h-20 object-contain"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-800">Módulo 1</p>
                    <p className="text-xs sm:text-sm text-green-600">Completo</p>
                  </div>
                </div>

                {/* Linha conectora */}
                <div className="w-1 h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full"></div>

                {/* Módulo 2 - Ativo */}
                <div className="flex flex-col items-center">
                  <img 
                    src={Plataforma2} 
                    alt="Plataforma 2"
                    className="w-22 h-22 sm:w-24 sm:h-20 lg:w-32 lg:h-24 object-contain"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-800">Módulo 2</p>
                    <p className="text-xs sm:text-sm text-yellow-600">Em andamento</p>
                  </div>
                </div>

                {/* Linha conectora */}
                <div className="w-1 h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-yellow-500 to-gray-400 rounded-full"></div>

                {/* Sinal de PARE */}
                <div className="flex flex-col items-center relative">
                  <img 
                    src={PlacaPare} 
                    alt="Placa Pare"
                    className="w-28 h-28 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                  />
                  <img 
                    src={MensagemPare} 
                    alt="Mensagem Pare"
                    className="absolute -top-8 -right-16 mr-6 sm:-right-20 lg:-right-24 w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 object-contain"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-red-600">Complete os módulos anteriores</p>
                  </div>
                </div>

                {/* Linha conectora - Bloqueada */}
                <div className="w-1 h-8 sm:h-12 lg:h-16 bg-gray-300 rounded-full opacity-50"></div>

                {/* Módulo 3 - Bloqueado */}
                <div className="flex flex-col items-center opacity-50 blur-sm">
                  <img 
                    src={Plataforma3} 
                    alt="Plataforma 3"
                    className="w-22 h-22 sm:w-24 sm:h-20 lg:w-32 lg:h-24 object-contain"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-500">Módulo 3</p>
                    <p className="text-xs sm:text-sm text-gray-400">🔒 Bloqueado</p>
                  </div>
                </div>

                {/* Linha conectora */}
                <div className="w-1 h-12 bg-gray-300 rounded-full opacity-50 mx-auto"></div>

                {/* Módulo 4 - Bloqueado */}
                <div className="flex flex-col items-center opacity-50 blur-sm">
                  <img 
                    src={Plataforma4} 
                    alt="Plataforma 4"
                    className="w-22 h-22 sm:w-24 sm:h-20 object-contain"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-500">Módulo 4</p>
                    <p className="text-xs sm:text-sm text-gray-400">🔒 Bloqueado</p>
                  </div>
                </div>

                {/* Linha conectora */}
                <div className="w-1 h-12 bg-gray-300 rounded-full opacity-50 mx-auto"></div>

                {/* Módulo 5 - Bloqueado */}
                <div className="flex flex-col items-center opacity-50 blur-sm">
                  <img 
                    src={Plataforma5} 
                    alt="Plataforma 5"
                    className="w-22 h-22 sm:w-24 sm:h-20 object-contain"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-500">Módulo 5</p>
                    <p className="text-xs sm:text-sm text-gray-400">🔒 Bloqueado</p>
                  </div>
                </div>

                {/* Linha final */}
                <div className="w-1 h-8 sm:h-12 lg:h-16 bg-gray-300 rounded-full opacity-50"></div>

                {/* Certificado Final */}
                <div className="flex flex-col items-center opacity-50 blur-sm">
                  <img 
                    src={Certificado} 
                    alt="Certificado"
                    className="w-18 h-22 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-contain"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm sm:text-base font-medium text-gray-500">Certificado</p>
                    <p className="text-xs sm:text-sm text-gray-400">🔒 Complete todos os módulos</p>
                  </div>
                </div>
              </div>

              {/* Layout Desktop (1280px+) - Trilha horizontal como na imagem */}
              <div className="hidden xl:block w-full max-w-7xl mx-auto pb-16">
                <div className="relative min-h-[600px]">
                  
                  {/* Primeira linha horizontal - Módulos 1, 2, PARE, 3 */}
                  <div className="absolute top-0 left-0 w-40 ml-36 flex justify-between items-center">
                    
                    {/* Módulo 1 - Início */}
                    <div className="flex flex-col items-center relative">
                      <div className="relative mb-4">
                        <img 
                          src={Plataforma1} 
                          alt="Plataforma 1"
                          className="w-38 h-30 object-contain"
                        />
                        <img 
                          src={Boneco} 
                          alt="Boneco"
                          className="absolute -top-6 mt-16 left-1/2 transform -translate-x-1/2 w-12 h-20 object-contain"
                        />
                      </div>
                      {/* <div className="text-center">
                        <p className="text-base font-medium text-gray-800">Módulo 1</p>
                        <p className="text-sm text-green-600">Completo</p>
                      </div> */}
                    </div>

                    {/* Linha horizontal 1->2 */}
                    <div className="flex-1 mx-8">
                      <img 
                        src={LinhaM} 
                        alt="Linha"
                        className="w-38 h-4 object-cover"

                      />
                    </div>

                    {/* Módulo 2 - Centro superior */}
                    <div className="flex flex-col items-center">
                      <div className="mb-4">
                        <img 
                          src={Plataforma2} 
                          alt="Plataforma 2"
                          className="w-38 h-30 object-contain"
                        />
                      </div>
                      {/* <div className="text-center">
                        <p className="text-base font-medium text-gray-800">Módulo 2</p>
                        <p className="text-sm text-yellow-600">Em andamento</p>
                      </div> */}
                    </div>

                    {/* Linha horizontal 2->PARE */}
                    <div className="flex-1 mx-8">
                      <img 
                        src={LinhaM} 
                        alt="Linha"
                        className="w-38 h-4 object-cover"
                        style={{ filter: 'hue-rotate(45deg) saturate(1.2)' }}
                      />
                    </div>

                    {/* PARE no meio */}
                    <div className="flex flex-col items-center relative">
                      <div className="relative mb-4">
                        <img 
                          src={PlacaPare} 
                          alt="Placa Pare"
                          className="w-24 h-24 object-contain"
                        />
                        <img 
                          src={MensagemPare} 
                          alt="Mensagem Pare"
                          className="absolute -top-12 -right-16 w-28 h-16 object-contain"
                        />
                      </div>
                      {/* <div className="text-center">
                        <p className="text-base font-medium text-red-600">Complete os módulos</p>
                        <p className="text-sm text-red-500">anteriores</p>
                      </div> */}
                    </div>

                    {/* Linha horizontal PARE->3 */}
                    <div className="flex-1 mx-8 opacity-50">
                      <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                    </div>

                    {/* Módulo 3 - Bloqueado (agora à direita do PARE) */}
                    <div className="flex flex-col items-center opacity-50 blur-sm">
                      <img 
                        src={Plataforma3} 
                        alt="Plataforma 3"
                        className="w-38 h-30 object-contain"
                      />
                      <div className="text-center mt-2">
                        <p className="text-sm sm:text-base font-medium text-gray-500">Módulo 3</p>
                        <p className="text-xs sm:text-sm text-gray-400">🔒 Bloqueado</p>
                      </div>
                    </div>
                  </div>
                  

                  {/* Linha vertical conectora */}
                  <div className="absolute top-40 right-20 w-1 h-32 bg-gray-300 opacity-50"></div>

                  {/* Segunda linha horizontal - Módulos 4, 5 */}
                  <div className="absolute top-72 left-0 w-40 flex ml-40 justify-between items-center">
                    
                    {/* Módulo 4 - Bloqueado */}
                    <div className="flex flex-col items-center opacity-50 blur-sm">
                      <div className="mb-4">
                        <img 
                          src={Plataforma4} 
                          alt="Plataforma 4"
                          className="w-38 h-30 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-base font-medium text-gray-500">Módulo 4</p>
                        <p className="text-sm text-gray-400">🔒 Bloqueado</p>
                      </div>
                    </div>

                    {/* Linha horizontal 2->PARE */}
                    <div className="flex-1 mx-8">
                      <img 
                        src={LinhaM} 
                        alt="Linha"
                        className="w-38 h-4 object-cover"
                        style={{ filter: 'hue-rotate(45deg) saturate(1.2)' }}
                      />
                    </div>

                    {/* Módulo 5 - Bloqueado */}
                    <div className="flex flex-col items-center opacity-50 blur-sm">
                      <div className="mb-4">
                        <img 
                          src={Plataforma5} 
                          alt="Plataforma 5"
                          className="w-38 h-30 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-base font-medium text-gray-500">Módulo 5</p>
                        <p className="text-sm text-gray-400">🔒 Bloqueado</p>
                      </div>
                    </div>

                    {/* Linha horizontal 2->PARE */}
                    <div className="flex-1 mx-8">
                      <img 
                        src={LinhaM} 
                        alt="Linha"
                        className="w-38 h-4 object-cover"
                        style={{ filter: 'hue-rotate(45deg) saturate(1.2)' }}
                      />
                    </div>

                    {/* Certificado no centro inferior */}
                    <div className="absolute ml-[40rem] bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 blur-sm">
                      <img 
                        src={Certificado} 
                        alt="Certificado"
                        className="w-38 h-30 object-contain mb-4"
                      />
                      <div className="text-center">
                        <p className="text-base font-medium text-gray-500">Certificado</p>
                        <p className="text-sm text-gray-400">🔒 Complete todos os módulos</p>
                      </div>
                  </div>

                  </div>




                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}