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

import React, { Component } from 'react';

class FormSignUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fullname: '',
    };
    // Esse método será o handler das mudanças no
  }


  // Quando atribuímos um handler para um evento onChange, o evento é passado como parâmetro da função. CALLBACK FUNCTION
  handleFullnameChange = (e) => {
    // Podemos acessar os dados utilizando event.target.value
    const fullname = e.target.value
    // Agora precisamos pegar esse dado capturado recolocá-lo na propriedade state do constructor
    this.setState({
      fullname: fullname
    })
  }


  render() {
    return (
      <div className="form-content-right">
        {/* Iniciando form: */}
        <form className="form">
          <h1>Cadastro de Pacientes ACME</h1>
          {/* NOME COMPLETO: */}
          <div className="form-inputs">
            <label htmlFor="fullname" className="form-label">Nome Completo
              {/* No atributo value do <input>, referenciamos a propriedade state do objeto FormSignUp, e pegamos o elemento desejado (fullname) */}
              <input
                type="text"
                value={this.state.fullname}
                onChange={this.handleFullnameChange}
                name="fullname"
                id="fullname"
                placeholder="Digite seu nome completo"
                className="form-input"
                required />
            </label>
          </div>
          {/* DATA DE NASCIMENTO */}
          <div className="form-inputs">
            <label htmlFor="dateofbirth" className="form-label">Data de Nascimento
              <input type="date" name="dateofbirth" id="dateofbirth" placeholder="Digite seu nome completo" className="form-input" />
            </label>
          </div>
          {/* CPF */}
          <div className="form-inputs">
            <label htmlFor="cpfnumber" className="form-label">CPF
              <input type="text" id="cpfnumber" name="cpfnumber" placeholder="Digite seu CPF (só números)" className="form-input" />
            </label>
          </div>
          {/* GÊNERO */}
          <div className="form-inputs">
            <label htmlFor="gender" className="form-label">Gênero
              <select name="gender" id="gender" placeholder="Selecione seu gênero" className="form-input">
                <option disabled selected>Selecione</option>
                <option value="m">Masculino</option>
                <option value="f">Feminino</option>
                <option value="mf">Mulher Trans</option>
                <option value="fm">Homem Trans</option>
              </select>
            </label>
          </div>
          {/* ENDEREÇO */}
          <div className="form-inputs">
            <label htmlFor="address" className="form-label">Endereço
              <input type="text" name="address" id="address" placeholder="Digite seu endereço" className="form-input" />
            </label>
          </div>
          {/* STATUS */}
          <div className="form-inputs">
            <label htmlFor="statusactive" className="form-label">Status
              <select name="statusactive" id="statusactive" placeholder="Selecione o status" className="form-input">
                {/* Converter isso pra bool */}
                <option value="true">Ativo</option>
                <option value="false">Inativo</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );;
  }
}

export default FormSignUp;

// {/* <script src="localStorage.js"></script> */ }


