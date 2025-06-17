import "../../../../../styles/dashboard/aluno/Quiz.css";
import { useState, useEffect } from 'react';
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

// Novo tipo para o resultado do quiz
interface QuizResult {
  isAnswered: boolean;
  isCorrect: boolean;
  correctAnswerIndex: number;
}

// Mock data com múltiplas perguntas - substitua por dados reais da API
const mockQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o principal objetivo dos Equipamentos de Proteção Individual (EPIs)?",
    answers: [
      { id: 1, text: "Melhorar o conforto do trabalhador" },
      { id: 2, text: "Proteger a integridade física do trabalhador" },
      { id: 3, text: "Facilitar a execução das tarefas" },
      { id: 4, text: "Reduzir os custos da empresa" }
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Qual das alternativas abaixo NÃO é considerada uma Norma Regulamentadora (NR)?",
    answers: [
      { id: 1, text: "NR-6 - Equipamento de Proteção Individual" },
      { id: 2, text: "NR-10 - Segurança em Instalações e Serviços em Eletricidade" },
      { id: 3, text: "NR-35 - Trabalho em Altura" },
      { id: 4, text: "NR-50 - Proteção contra Incêndios" }
    ],
    correctAnswer: 4
  },
  {
    id: 3,
    question: "Em caso de acidente de trabalho, qual deve ser a primeira ação a ser tomada?",
    answers: [
      { id: 1, text: "Documentar o acidente" },
      { id: 2, text: "Prestar os primeiros socorros" },
      { id: 3, text: "Comunicar à chefia" },
      { id: 4, text: "Limpar o local do acidente" }
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Qual é a altura mínima para ser considerado trabalho em altura segundo a NR-35?",
    answers: [
      { id: 1, text: "1,5 metros" },
      { id: 2, text: "2,0 metros" },
      { id: 3, text: "2,5 metros" },
      { id: 4, text: "3,0 metros" }
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "O que significa a sigla CIPA?",
    answers: [
      { id: 1, text: "Comissão Interna de Prevenção de Acidentes" },
      { id: 2, text: "Comitê Interno de Proteção Ambiental" },
      { id: 3, text: "Central de Informações sobre Prevenção de Acidentes" },
      { id: 4, text: "Coordenação Interna de Procedimentos de Alerta" }
    ],
    correctAnswer: 1
  }
];

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
  
  // Novos estados para controle das perguntas
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [totalQuestions] = useState<number>(mockQuestions.length);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  
  // Novo estado para o resultado do quiz
  const [quizResult, setQuizResult] = useState<QuizResult>({
    isAnswered: false,
    isCorrect: false,
    correctAnswerIndex: -1
  });

  const handleAnswerClick = (answerIndex: number) => {
    if (loadingState.isLoading || quizResult.isAnswered) return;
    setSelectedAnswer(answerIndex);
  };

  // Função atualizada para enviar a resposta
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !currentQuestion || quizResult.isAnswered) return;
    
    const isCorrect = selectedAnswer === (currentQuestion.correctAnswer - 1); // -1 porque o array é 0-based
    
    setQuizResult({
      isAnswered: true,
      isCorrect: isCorrect,
      correctAnswerIndex: currentQuestion.correctAnswer - 1
    });

    // Se acertou, incrementa o contador de respostas corretas
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  // Função para avançar para a próxima pergunta
  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < totalQuestions) {
      // Vai para a próxima pergunta
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(mockQuestions[nextIndex]);
      setSelectedAnswer(null);
      setQuizResult({
        isAnswered: false,
        isCorrect: false,
        correctAnswerIndex: -1
      });
    } else {
      // Quiz completado
      setIsQuizCompleted(true);
    }
  };

  // Função para reiniciar todo o quiz
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCurrentQuestion(mockQuestions[0]);
    setSelectedAnswer(null);
    setQuizResult({
      isAnswered: false,
      isCorrect: false,
      correctAnswerIndex: -1
    });
    setCorrectAnswers(0);
    setIsQuizCompleted(false);
  };

  // Função para tentar novamente a pergunta atual (quando erra)
  const handleRetryQuestion = () => {
    setSelectedAnswer(null);
    setQuizResult({
      isAnswered: false,
      isCorrect: false,
      correctAnswerIndex: -1
    });
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
        
        setCurrentQuestion(mockQuestions[0]);
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

  // Componente de resultado do quiz
  const QuizResultDisplay = () => (
    <div className="mt-6 p-6 rounded-lg border-2 bg-white shadow-lg">
      <div className={`text-center ${quizResult.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
        <div className="text-4xl mb-3">
          {quizResult.isCorrect ? '✅' : '❌'}
        </div>
        <h3 className="text-xl font-bold mb-2">
          {quizResult.isCorrect ? 'Parabéns! Resposta Correta!' : 'Resposta Incorreta'}
        </h3>
        <p className="text-gray-700 mb-4">
          {quizResult.isCorrect 
            ? 'Você acertou! Vamos para a próxima pergunta.'
            : `A resposta correta é: "${currentQuestion?.answers[quizResult.correctAnswerIndex]?.text}"`
          }
        </p>
        
        {quizResult.isCorrect ? (
          // Se acertou, botão para próxima pergunta
          <button
            onClick={handleNextQuestion}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {currentQuestionIndex + 1 < totalQuestions ? 'Próxima Pergunta' : 'Finalizar Quiz'}
          </button>
        ) : (
          // Se errou, botão para tentar novamente
          <button
            onClick={handleRetryQuestion}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tentar Novamente
          </button>
        )}
      </div>
    </div>
  );

  // Componente de quiz completado
  const QuizCompletedDisplay = () => (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border-2 border-green-500">
      <div className="text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Parabéns! Quiz Concluído!
        </h2>
        <div className="text-xl text-gray-700 mb-6">
          <p>Você completou todas as perguntas do quiz sobre Segurança do Trabalho!</p>
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-green-800">
              Pontuação Final: {correctAnswers}/{totalQuestions}
            </p>
            {/* <p className="text-green-700">
              Taxa de Acerto: {Math.round((correctAnswers / totalQuestions) * 100)}%
            </p> */}
          </div>
        </div>
        <div className="space-y-3">
          <button
            onClick={handleRestartQuiz}
            className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Refazer Quiz
          </button>
          <button
            onClick={() => window.location.href = '/dashboard/aluno/minhastrilhas'}
            className="w-full bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Voltar às Trilhas
          </button>
        </div>
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
        {/* Content Area */}
        <div className="p-4 mt-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
          {loadingState.isLoading && <LoadingSpinner />}
          
          {loadingState.error && (
            <ErrorDisplay error={loadingState.error} onRetry={retryLoading} />
          )}

          {!loadingState.isLoading && !loadingState.error && !isQuizCompleted && currentQuestion && (
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
                {/* Indicador de progresso */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-gray-600 font-medium">
                    Pergunta {currentQuestionIndex + 1} de {totalQuestions}
                  </span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>
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
                    {currentQuestion.answers.map((answer, index) => {
                      let buttonClass = `w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed `;
                      
                      if (quizResult.isAnswered) {
                        // Se já respondeu, mostrar cores baseadas na correção
                        if (index === quizResult.correctAnswerIndex) {
                          buttonClass += 'bg-green-600 text-white border-green-600'; // Resposta correta sempre verde
                        } else if (selectedAnswer === index) {
                          buttonClass += 'bg-red-600 text-white border-red-600'; // Resposta selecionada incorreta em vermelho
                        } else {
                          buttonClass += 'bg-gray-200 text-gray-500 border-gray-300'; // Outras alternativas acinzentadas
                        }
                      } else {
                        // Antes de responder, comportamento normal
                        if (selectedAnswer === index) {
                          buttonClass += 'bg-red-600 text-white border-red-600';
                        } else {
                          buttonClass += 'bg-white text-gray-700 border-red-600 hover:bg-red-50';
                        }
                      }

                      return (
                        <button
                          key={answer.id}
                          onClick={() => handleAnswerClick(index)}
                          disabled={loadingState.isLoading || quizResult.isAnswered}
                          className={buttonClass}
                        >
                          <span className="font-medium text-sm sm:text-base">
                            {answer.id}. {answer.text}
                          </span>
                        </button>
                      );
                    })}

                    {/* Botão Enviar */}
                    {selectedAnswer !== null && !quizResult.isAnswered && (
                      <button
                        onClick={handleSubmitAnswer}
                        className="w-full mt-4 p-3 sm:p-4 bg-green-600 text-white rounded-lg border-2 border-green-600 hover:bg-green-700 transition-all duration-200 font-medium text-sm sm:text-base"
                      >
                        Enviar Resposta
                      </button>
                    )}

                    {/* Resultado do Quiz */}
                    {quizResult.isAnswered && <QuizResultDisplay />}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Tela de Quiz Completado */}
          {isQuizCompleted && <QuizCompletedDisplay />}

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