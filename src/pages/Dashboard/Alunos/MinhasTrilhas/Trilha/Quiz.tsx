import "../../../../../styles/dashboard/aluno/Quiz.css";
import React, { useState, useEffect } from 'react';
import prancheta from "./prancheta.svg";

// Tipos para melhor tipagem
interface Answer {
  id: number;
  text: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  answers: Answer[];
  correctAnswer: number;
}

interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [expandedModules, setExpandedModules] = useState<{[key: string]: boolean}>({});
  const [selectedSection, setSelectedSection] = useState<string>('quiz');
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    error: null
  });
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  // Mock data - substitua por dados reais da API
  const mockQuestion: QuizQuestion = {
    id: 1,
    question: "Qual é o principal objetivo dos Equipamentos de Proteção Individual (EPIs)?",
    answers: [
      { id: 1, text: "Melhorar o conforto do trabalhador" },
      { id: 2, text: "Proteger a integridade física do trabalhador" },
      { id: 3, text: "Facilitar a execução das tarefas" },
      { id: 4, text: "Reduzir os custos da empresa" }
    ],
    correctAnswer: 2
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (loadingState.isLoading) return;
    setSelectedAnswer(answerIndex);
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
    setSelectedSection(moduleId);
  };

  const selectSection = (sectionId: string) => {
    setSelectedSection(sectionId);
    if (sectionId === 'quiz') {
      setExpandedModules({});
    }
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Simulação de carregamento de dados
  useEffect(() => {
    const loadQuizData = async () => {
      try {
        setLoadingState({ isLoading: true, error: null });
        
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simular possível erro (descomente para testar)
        // if (Math.random() > 0.7) {
        //   throw new Error('Falha ao carregar dados do quiz');
        // }
        
        setCurrentQuestion(mockQuestion);
        setLoadingState({ isLoading: false, error: null });
      } catch (error) {
        setLoadingState({ 
          isLoading: false, 
          error: error instanceof Error ? error.message : 'Erro desconhecido' 
        });
      }
    };

    loadQuizData();
  }, []);

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

  // Loading Component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
        <div className="mt-4 text-center text-gray-600 font-medium">Carregando quiz...</div>
      </div>
    </div>
  );

  // Error Component
  const ErrorDisplay = ({ error, onRetry }: { error: string, onRetry: () => void }) => (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200 max-w-md">
        <div className="text-red-600 text-4xl mb-4">⚠️</div>
        <h3 className="text-lg font-semibold text-red-800 mb-2">Ops! Algo deu errado</h3>
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );

  const retryLoading = () => {
    setLoadingState({ isLoading: true, error: null });
    // Recarregar dados
    window.location.reload();
  };

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
                  transform: expandedModules['modulo1'] ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              ></span>
              04 Aulas
            </div>

            {/* Aulas do Módulo 1 */}
            <div className={`ml-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedModules['modulo1'] ? 'max-h-48 pb-3' : 'max-h-0'}`}>
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
                  transform: expandedModules['modulo2'] ? 'rotate(45deg)' : 'rotate(0deg)'
                }}
              ></span>
              05 Aulas
            </div>

            {/* Aulas do Módulo 2 */}
            <div className={`ml-8 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${expandedModules['modulo2'] ? 'max-h-52 pb-3' : 'max-h-0'}`}>
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

          {/* Quiz Section */}
          <div className={`cursor-pointer ${selectedSection === 'quiz' ? 'bg-red-50 border-l-4 border-red-600 p-3 rounded' : 'p-3'}`} onClick={() => selectSection('quiz')}>
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
      <div className={`flex-1 relative quiz-background transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'}`}>

        {/* Close Button
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold z-10">
          ×
        </button> */}

        {/* Content Area */}
        <div className="p-4 mt-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
          {loadingState.isLoading && <LoadingSpinner />}
          
          {loadingState.error && (
            <ErrorDisplay error={loadingState.error} onRetry={retryLoading} />
          )}

          {!loadingState.isLoading && !loadingState.error && currentQuestion && (
            <>
              {/* Quiz Header */}
              <div className="text-center mb-6 mt-3 lg:mb-8">
                <h1 className="text-center text-[#BC1F1B] text-[48px] font-medium leading-[38px] mb-4"
                  style={{
                    textShadow: '1px 4px 5px rgba(0, 0, 0, 0.25)',
                    fontFamily: 'Poppins',
                  }}
                  >
                  Quiz
                </h1>
              </div>

              <div className="max-w-6xl mx-auto mt-10 lg:mt-16">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
                  {/* Question */}
                  <div className="flex-1">
                    <h2 className="text-black text-[38px] font-normal leading-[53px] underline mb-6 lg:mb-8"
                      style={{
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        fontFamily: 'Poppins',
                        textDecorationStyle: 'solid',
                        textDecorationSkipInk: 'auto',
                        textDecorationThickness: 'auto',
                        textUnderlineOffset: 'auto',
                        textUnderlinePosition: 'from-font',
                      }}>
                      {currentQuestion.question}
                    </h2>
                  </div>

                  {/* Answer Options */}
                  <div className="w-full lg:w-80 xl:w-96 space-y-3">
                    {currentQuestion.answers.map((answer, index) => (
                      <button
                        key={answer.id}
                        onClick={() => handleAnswerClick(index)}
                        disabled={loadingState.isLoading}
                        className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                          selectedAnswer === index
                            ? 'bg-red-600 text-white border-red-600'
                            : 'bg-white text-gray-700 border-red-600 hover:bg-red-50'
                        }`}
                      >
                        <span className="font-medium text-sm sm:text-base">
                          {answer.id}. {answer.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Decorative Elements - Hidden on small screens */}
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
            <div className="relative h-32 lg:h-48 opacity-20">
              {[...Array(6)].map((_, rowIndex) => (
                <div key={rowIndex} className="flex" style={{marginTop: rowIndex * 20}}>
                  {[...Array(12 + (rowIndex % 2 ? 1 : 0))].map((_, colIndex) => (
                    <div
                      key={colIndex}
                      className="w-16 lg:w-20 h-5 lg:h-6 border border-gray-400 bg-gray-200"
                      style={{
                        marginLeft: rowIndex % 2 ? (colIndex === 0 ? -8 : 0) : 0
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;