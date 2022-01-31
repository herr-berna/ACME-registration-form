// Aqui é o formulário que recebe os dados
// Importando uma arrow function e export ao mesmo tempo - rafce
// Novo componente - rce
// Estrutura de construtor - rconst
// Depois que escrevemos JSX, o Babel irá transformá-lo em javascript que o browser consegue entender.

// JSX - Sintaxe que mistura JS com HTML, usada no React para renderizar os componentes
// A ideia é transformar o puro HTML da form em um Controlled Component.
// Para isso, precisamos:
// 1. Criar um Component State que irá controlar o value
// 2. Criar um onChange Event Handler, que será um método dentro do construtor do formulário

import React from 'react';
import useForm from './UseForm.js'
import validateInfo from './validateInfo.js';
import './form.css'
// Para criar um controlled component, são necessários 3 passos:
// Criar o HTML Input Element
// Atribuir o state do componente ao value desse elemento
// Atribuir um onChangeHandler que atualiza o state

const FormSignUp = ({ submitForm }) => {

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo)

  // Refazer o form com styled components
  return (
    <div className="form-content">
      {/* Para tratar uma form com javascript, adicionamos um handler ao evento onSubmit */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Cadastro de Pacientes ACME</h1>
        {/* NOME COMPLETO: */}
        <div className="form-inputs">
          <label htmlFor="fullname" className="form-label">Nome Completo
            {/* No atributo value do <input>, referenciamos a propriedade state do objeto FormSignUp, e pegamos o elemento desejado (fullname) */}
          </label>
          <input
            type="text"
            // Atribuindo o state do componente ao value do HTML
            value={values.fullname}
            onChange={handleChange}
            id="fullname"
            name="fullname"
            placeholder="Digite o nome completo"
            className="form-input"
          />
          {errors.fullname && <span class="error-msg">{errors.fullname}</span>}
        </div>
        {/* DATA DE NASCIMENTO */}
        <div className="form-inputs">
          <label htmlFor="birthday" className="form-label">Data de Nascimento
          </label>
          <input
            type="date"
            value={values.birthday}
            onChange={handleChange}
            id="birthday"
            name="birthday"
            placeholder={Date.now()}
            className="form-input" />
          {errors.birthday && <span class="error-msg">{errors.birthday}</span>}
        </div>
        {/* CPF */}
        <div className="form-inputs">
          <label htmlFor="cpf" className="form-label">CPF
          </label>
          <input
            type="text"
            value={values.cpf}
            onChange={handleChange}
            id="cpf"
            name="cpf"
            placeholder="Digite o CPF (só números)"
            className="form-input" />
          {errors.cpf && <span class="error-msg">{errors.cpf}</span>}
        </div>
        {/* GÊNERO */}
        <div className="form-inputs">
          <label htmlFor="gender" className="form-label">Gênero
          </label>
          <select
            value={values.gender}
            onChange={handleChange}
            id="gender"
            name="gender"
            placeholder="Selecione o gênero"
            className="form-input">
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="mf">Mulher Trans</option>
            <option value="fm">Homem Trans</option>
          </select>
        </div>
        {/* ENDEREÇO */}
        <div className="form-inputs">
          <label htmlFor="address" className="form-label">Endereço
          </label>
          <input
            type="text"
            value={values.address}
            onChange={handleChange}
            id="address"
            name="address"
            placeholder="Digite o endereço"
            className="form-input" />
        </div>
        {/* STATUS */}
        <div className="form-inputs">
          <label htmlFor="status" className="form-label">Status
          </label>
          <select
            value={values.status}
            onChange={handleChange}
            id="status"
            name="status"
            placeholder="Selecione o status"
            className="form-input">
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
        <div className="form-inputs">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );;
}

export default FormSignUp;

