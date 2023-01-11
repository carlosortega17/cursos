import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/errors/error.page';
import FundamentosPage from './pages/fundamentos.page';
import HomePage from './pages/home.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cursos" element={<HomePage />} />
        <Route path="/cursos/fundamentos" element={<FundamentosPage />} />
        <Route path="*" element={<ErrorPage code={404} description="Page not found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
