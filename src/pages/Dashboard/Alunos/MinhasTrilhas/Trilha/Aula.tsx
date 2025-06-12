import { NotebookPen, NotebookText } from "lucide-react";
import { Link } from "react-router-dom";
import "../../../../../styles/dashboard/aluno/Aula.css";
import React, { useState, useEffect } from 'react';
import prancheta from "./prancheta.svg";
import { useNavigate } from 'react-router-dom';

// Tipos para melhor tipagem
type ModuleKey = 'modulo1' | 'modulo2';

interface ExpandedModules {
  modulo1: boolean;
  modulo2: boolean;
}

export default function Aula() {
  
  const navigate = useNavigate();
  // Estados necessários
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const [expandedModules, setExpandedModules] = useState<ExpandedModules>({
    modulo1: false,
    modulo2: false
  });

  // Funções necessárias
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleModule = (moduleId: string) => {
    // Verificação de tipo segura
    if (moduleId === 'modulo1' || moduleId === 'modulo2') {
      setExpandedModules(prev => ({
        ...prev,
        [moduleId]: !prev[moduleId]
      }));
      setSelectedSection(moduleId);
    }
  };

  const selectSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    if (sectionId === 'quiz') {
      setExpandedModules({ modulo1: false, modulo2: false });
    }
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
                  Segurança do Trabalho:
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
                  Módulo 1
              </div>
            </div>

            <div className="ml-4 px-3 pb-3 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
              <span 
                className="w-3 h-3 bg-gray-400 rounded-sm transition-transform duration-300 ease-in-out"
                style={{
                  transform: expandedModules.modulo1 ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              ></span>
              04 Aulas
            </div>

            {/* Aulas do Módulo 1 */}
            <div className={`ml-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedModules.modulo1 ? 'max-h-48 pb-3' : 'max-h-0'}`}>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 1: Introdução à Segurança do Trabalho
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 2: Equipamentos de Proteção Individual
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 3: Normas Regulamentadoras
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 4: Prevenção de Acidentes
              </a>
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
                Módulo 2
              </div>
            </div>

            <div className="ml-4 px-3 pb-3 text-xs sm:text-sm text-gray-600 flex items-center gap-2">
              <span 
                className="w-3 h-3 bg-gray-400 rounded-sm transition-transform duration-300 ease-in-out"
                style={{
                  transform: expandedModules.modulo2 ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              ></span>
              05 Aulas
            </div>

            {/* Aulas do Módulo 2 */}
            <div className={`ml-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedModules.modulo2 ? 'max-h-52 pb-3' : 'max-h-0'}`}>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 1: Ergonomia no Ambiente de Trabalho
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 2: Segurança em Altura
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 3: Manuseio de Materiais Perigosos
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 4: Primeiros Socorros
              </a>
              <a href="/dashboard/aluno/minhastrilhas/trilha/aula" className="block text-xs text-gray-500 hover:text-gray-700 cursor-pointer py-1">
                • Aula 5: Gestão de Riscos Ocupacionais
              </a>
            </div>
          </div>

          {/* Módulo 3 */}
          <div className={`mb-4 ${selectedSection === 'modulo3' ? 'bg-red-50 border-l-4 border-red-600 rounded' : ''}`}>
            <div className="p-3 cursor-pointer opacity-50">
              <div className="text-gray-400 font-medium text-sm sm:text-base leading-[21px]"
                    style={{ fontFamily: 'Poppins' }}>
                Módulo 3
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
                Módulo 4
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
                Módulo 5
              </div>
            </div>
            <div className="ml-4 px-3 pb-3 text-xs text-gray-400 flex items-center gap-2">
              <span>🔒</span>
              Bloqueado
            </div>
          </div>

            {/* Quiz Section */}
            <div className={`cursor-pointer ${selectedSection === 'quiz' ? 'bg-red-50 border-l-4 border-red-600 p-3 rounded' : 'p-3'}`} 
                onClick={() => {
                  selectSection('quiz');
                  navigate('/dashboard/aluno/minhastrilhas/trilha/quiz');
                }}>
              <div className="flex items-center gap-2 text-red-700">
                <span className="w-4 h-4 bg-red-600 rounded-sm"></span>
                <div>
                  <div className="font-medium text-xs sm:text-sm">Quiz - Segurança do Trabalho</div>
                </div>
              </div>
            </div>
          
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 relative aula-background transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>

        {/* Close Button
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold z-10">
          ×
        </button> */}

        {/* Content Area */}
        <div className="container-video-aula">
          <div className="informacao-aula">
            <h1 className="titulo-informacao-aula">Introdução</h1>
            <p className="descricao-informacao-aula">
              Segurança do Trabalho: Aula 01
            </p>
          </div>
          <div className="video-aula">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sIjEzqbD2jg?si=sX2Cu-sRRQlPhYp7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              /* full screen - falta implementar */
            ></iframe>
          </div>
          <div className="descricao-aula">
            <p>
              Neste módulo, você aprenderá sobre os cuidados essenciais com equipamentos de rede no ambiente de trabalho. Abordaremos as principais medidas de segurança
               para manuseio de roteadores, switches e cabeamento, além das normas de proteção contra choques elétricos e procedimentos adequados para instalação e manutenção 
               de infraestrutura de rede. Entenda como prevenir acidentes e garantir um ambiente de trabalho seguro ao lidar com tecnologias de comunicação.
            </p>
          </div>
          <div className="navegacao-aula">
            <p>Aula Anterior</p>
            <p>Próxima Aula</p>
          </div>
        </div>
      </div>
    </div>
  );
}