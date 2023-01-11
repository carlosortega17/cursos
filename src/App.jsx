import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cursos" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;