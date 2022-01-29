// Aqui é feito o tratamento dos dados
// Importando uma arrow function e export ao mesmo tempo - rafce tab
// Depois que escrevemos JSX, o Babel irá transformá-lo em javscript que o browser consegue entender.
import React from 'react';

// JSX - Sintaxe que mistura JS com HTML, usada no React para renderizar os componentes
const FormSignUp = () => {
  return (
    <div className="form-content-right">
      {/* Iniciando form: */}
      <form className="form">
        <h1>Junte-se a nós hoje mesmo! Crie sua conta de forma fácil e rápida aqui.</h1>
        {/* NOME COMPLETO: */}
        <div className="form-inputs">
          <label htmlFor="full-name" className="form-label">Nome Completo
            <input type="text" name="full-name" placeholder="Digite seu nome completo" className="form-input" />
          </label>
        </div>
        {/* DATA DE NASCIMENTO */}
        <div className="form-inputs">
          <label htmlFor="date-of-birth" className="form-label">Data de Nascimento
            <input type="date" name="date-of-birth" placeholder="Digite seu nome completo" className="form-input" />
          </label>
        </div>
        {/* CPF */}
        <div className="form-inputs">
          <label htmlFor="cpf-number" className="form-label">CPF
            <input type="text" name="cpf-number" placeholder="Digite seu CPF (só números)" className="form-input" />
          </label>
        </div>
        {/* GÊNERO */}
        <div className="form-inputs">
          <label htmlFor="gender" className="form-label">Gênero
            <input type="text" name="gender" placeholder="Selecione seu gênero" className="form-input" />
          </label>
        </div>
        {/* ENDEREÇO */}
        <div className="form-inputs">
          <label htmlFor="full-name" className="form-label">Endereço
            <input type="text" name="full-name" placeholder="Digite seu endereço" className="form-input" />
          </label>
        </div>
        {/* STATUS */}
        <div className="form-inputs">
          <label htmlFor="full-name" className="form-label">Status
            <input type="text" name="full-name" placeholder="Selecione o status" className="form-input" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
