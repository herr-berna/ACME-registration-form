import React from 'react';
import Home from './Home';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Criando uma função para aplicar estilos globalmente

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="Form" exact element={<Form />}></Route>
        </Routes>
      </Router>
    </>
  );
}
document.getElementById('root')
export default App;
