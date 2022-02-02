// Aqui é o formulário que recebe os dados

import React, { Component } from 'react';
import GlobalStyle from '../styles/globalStyle';
import '../styles/Form.css'
import { Title, SecButton } from '../styles/styles';

class Form extends Component {

  constructor(props) {
    super(props)
    // No fim nós exportaremos esse state no formato JSON
    this.state = {
      fullname: '',
      birthday: '',
      // O CPF será também a key para o localstorage
      cpf: '',
      gender: 'm',
      address: '',
      status: 'active'
    };
  }

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
    // Destruturando e pegando o cpf
    const { cpf } = formDataObject

    // Abrimos o localstorage para ver se tem alguma coisa lá dentro
    if (localStorage.length > 0) {
      // Verificando se CPF já existe
      // Iterando pelas keys através de seus índices
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        // Colocaremos todas as keys em uma array
        let keyArray = []
        keyArray.push(key)
        // Verificando as keys na array
        if (keyArray.includes(cpf)) {
          // Erro: cpf igual
          let error = document.querySelector('#error');
          let msg = 'O CPF já está cadastrado!'
          error.innerHTML = msg
          break
        }
        else {
          // Pegamos o JSON -> stringify
          let formDataString = JSON.stringify(formDataObject)
          // Usamos o CPF como chave para guardar o objeto
          localStorage.setItem(cpf, formDataString)
          // Avisamos que foi salvo com sucesso
          let success = document.querySelector('#success');
          let msg = 'Cadastro salvo com sucesso!'
          success.innerHTML = msg
        }
      }

    } else {
      // Não há itens - Podemos adicionar esse registro. 
      let formDataString = JSON.stringify(formDataObject)
      localStorage.setItem(cpf, formDataString)
      // Avisamos que foi salvo com sucesso
      let success = document.querySelector('#success');
      let msg = 'Cadastro salvo com sucesso!'
      success.innerHTML = msg
    }
  }

  render() {

    const { fullname, birthday, cpf, gender, address, status } = this.state

    return (
      <>
        <GlobalStyle />
        <Title>Cadastrar novo paciente
          <span>Preencha o formulário.</span>
        </Title>
        <div id="error"></div>
        <div id="success"></div>
        <form onSubmit={this.handleSubmit}>
          <label
            htmlFor="fullname"
          >Nome completo*: </label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={this.handleFullnameChange}
            placeholder="Digite o nome completo..."
            required
          />
          <label
            htmlFor="birthday"
          >Data de nascimento*: </label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={this.handleBirthdayChange}
            required
          />
          <label htmlFor="cpf">CPF*:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={this.handleCpfChange}
            placeholder="Digite o CPF (apenas números)"
            required
          />
          <label htmlFor="gender">Gênero*: </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={this.handleGender}
            placeholder="Selecione o gênero"
            required
          >
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="mf">Mulher Trans</option>
            <option value="fm">Homem Trans</option>
          </select>

          <label htmlFor="address">Endereço: </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={this.handleAddressChange}
            placeholder="Digite o endereço"
          />
          <label htmlFor="status">Status*: </label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={this.handleStatusChange}
            placeholder="Selecione o status"
            required
          >
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>

          <SecButton type="submit">Enviar</SecButton>
        </form>
      </>
    );
  }
};

export default Form;