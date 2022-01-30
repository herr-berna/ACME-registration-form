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

// Para criar um controlled component, são necessários 3 passos:
// Criar o HTML Input Element
// Atribuir o state do componente ao value desse elemento
// Atribuir um onChangeHandler que atualiza o state

class FormSignUp extends Component {

  constructor(props) {
    super(props)

    // No fim nós exportamos esse state em objeto JSON!
    this.state = {
      fullname: '',
      birthday: '',
      // O CPF será também a key para o localstorage
      cpf: '', // Fazer verificação assim que o formulário for enviado
      gender: 'm', // Opção padrão de select se coloca direto no state
      address: '',
      status: 'active'
    };
  }

  // Quando atribuímos um handler para um evento onChange, o evento é passado como parâmetro da função. CALLBACK FUNCTION
  handleFullnameChange = e => {
    // Podemos acessar os dados utilizando event.target.value
    const fullname = e.target.value
    // Agora precisamos pegar esse dado capturado e recolocá-lo na propriedade state do constructor
    this.setState({
      fullname: fullname,
    })
    // Com isso, o atributo 'value' do <input> fullname agora é o que foi digitado pelo usuário, pois ele monitora aqui em cima.
  }

  handleBirthdayChange = e => {
    // O value em input type date sempre será no formato AAAA-MM-DD
    const birthday = e.target.value
    this.setState({
      birthday: birthday
    })
  }

  handleCpfChange = e => {
    const cpf = e.target.value
    this.setState({
      cpf: cpf
    })
  }

  handleGender = e => {
    const gender = e.target.value
    this.setState({
      gender: gender
    })
  }

  handleAddressChange = e => {
    const address = e.target.value
    this.setState({
      address: address
    })
  }

  handleStatusChange = e => {
    const status = e.target.value
    this.setState({
      status: status
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // Já temos o objeto completo com os dados da form
    const formDataObject = this.state

    // Temos o 


    alert(`${JSON.stringify(this.state)}`) // Stringificaremos na hora de botar no localstorage.
  }

  render() {

    const { fullname, birthday, cpf, gender, address, status } = this.state
    return (
      <div className="form-content-right">
        {/* Para tratar uma form com javascript, adicionamos um handler ao evento onSubmit */}
        <form onSubmit={this.handleSubmit} className="form">
          <h1>Cadastro de Pacientes ACME</h1>
          {/* NOME COMPLETO: */}
          <div className="form-inputs">
            <label htmlFor="fullname" className="form-label">Nome Completo
              {/* No atributo value do <input>, referenciamos a propriedade state do objeto FormSignUp, e pegamos o elemento desejado (fullname) */}
              <input
                type="text"
                // Atribuindo o state do componente ao value do HTML
                value={fullname}
                onChange={this.handleFullnameChange}
                id="fullname"
                placeholder="Digite seu nome completo"
                className="form-input"
                required />
            </label>
          </div>
          {/* DATA DE NASCIMENTO */}
          <div className="form-inputs">
            <label htmlFor="birthday" className="form-label">Data de Nascimento
              <input
                type="date"
                value={birthday}
                onChange={this.handleBirthdayChange}
                id="birthday"
                placeholder={Date.now()}
                className="form-input" />
            </label>
          </div>
          {/* CPF */}
          <div className="form-inputs">
            <label htmlFor="cpf" className="form-label">CPF
              <input
                type="text"
                value={cpf}
                onChange={this.handleCpfChange}
                id="cpf"
                placeholder="Digite seu CPF (só números)"
                className="form-input" />
            </label>
          </div>
          {/* GÊNERO */}
          <div className="form-inputs">
            <label htmlFor="gender" className="form-label">Gênero
              <select
                value={gender}
                onChange={this.handleGender}
                id="gender"
                placeholder="Selecione seu gênero"
                className="form-input">
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
              <input
                type="text"
                value={address}
                onChange={this.handleAddressChange}
                id="address"
                placeholder="Digite seu endereço"
                className="form-input" />
            </label>
          </div>
          {/* STATUS */}
          <div className="form-inputs">
            <label htmlFor="status" className="form-label">Status
              <select
                value={status}
                onChange={this.handleStatusChange}
                id="status"
                placeholder="Selecione o status"
                className="form-input">
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </select>
            </label>
          </div>
          <div className="form-inputs">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );;
  }
}

export default FormSignUp;

// {/* <script src="localStorage.js"></script> */ }


