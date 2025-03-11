import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
// import { BrowserRouter, Route, Routes } from 'react-router';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<App />} />
  //   </Routes>
  // </BrowserRouter>

  // <React.StrictMode>
  //   <div>
  //     <App />
  //   </div>
  // </React.StrictMode>
);
