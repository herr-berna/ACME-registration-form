import React from 'react';
import GlobalStyle from '../styles/globalStyle';
import { Title, Header, Footer, MainButton } from '../styles/styles';
import logo from '../img/logo.png'
import '../styles/Patients.css'

const openModal = (e) => {
  // No Modal fica a form pra mudar o objeto.
  // O objeto será referenciado através do identificador passado para a <li>
  let targetId = e.currentTarget.parentElement.getAttribute('datapatientid');
  // Agora que temos o identificador do objeto, acessamos ele no localStorage
  let selectedObject = JSON.parse(localStorage.getItem(targetId))
  console.log(selectedObject)
  let changeInfoPrompt = window.prompt(`Qual informação você gostaria de alterar em ${selectedObject.fullname}? (nome, nasc, status, cpf, end, gen, del para apagar registro)`).toLowerCase()

  // As informações dos pacientes poderão ser atualizadas através de prompts: 
  // eslint-disable-next-line default-case
  switch (changeInfoPrompt) {
    case 'nome':
      let newName = window.prompt('Qual o novo nome?').toLowerCase()
      selectedObject.fullname = newName
      // Pegamos o novo nome. Agora alteramos no objeto e salvamos por cima
      localStorage.setItem(targetId, JSON.stringify(selectedObject))
      alert('Nome alterado com sucesso.')
      break;

    case 'nasc':
      let newYear = window.prompt('Digite o ano de nascimento: ')
      let newMonth = window.prompt('Digite o número do mês (01,02,03...): ')
      let newDay = window.prompt('Agora digite o dia: ')
      selectedObject.birthday = `${newYear}/${newMonth}/${newDay}`
      localStorage.setItem(targetId, JSON.stringify(selectedObject))
      alert('Data de nascimento alterada com sucesso.')
      break;

    case 'status':
      let newStatus = window.prompt('Qual o status deste paciente? (ativo/inativo)').toLowerCase()
      selectedObject.status = newStatus
      localStorage.setItem(targetId, JSON.stringify(selectedObject))
      alert('Status alterado com sucesso.')
      break;

    case 'cpf':
      let newCpf = window.prompt('Qual o CPF deste paciente?')
      selectedObject.cpf = newCpf
      localStorage.setItem(targetId, JSON.stringify(selectedObject))
      alert('CPF alterado com sucesso.')
      break;

    case 'end':
      let newAddress = window.prompt('Qual o endereço deste paciente?').toLowerCase()
      selectedObject.address = newAddress
      localStorage.setItem(targetId, JSON.stringify(selectedObject))
      alert('Endereço alterado com sucesso.')
      break;

    case 'gen':
      let newGender = window.prompt('Qual o gênero deste paciente? (m/f)').toLowerCase()
      selectedObject.gender = newGender
      localStorage.setItem(targetId, JSON.stringify(selectedObject))
      alert('Gênero alterado com sucesso.')
      break;

    case 'del':
      let confirm = window.prompt('Tem certeza de que deseja apagar este paciente? (s/n)').toLowerCase()
      // eslint-disable-next-line default-case
      switch (confirm) {
        case 's':
          localStorage.removeItem(targetId)
          alert('Paciente removido com sucesso.')
          break;
        case 'n':
          break;
      }
  }
}

const patientList = () => {
  // Iterar pelo localStorage
  for (let i = 0; i < localStorage.length; i++) {
    // O paciente será acessado por sua chave no local storage, em ordem numérica
    let patient = localStorage.getItem(localStorage.key(i));
    // Transformando em JSON e destruturando
    let patientJSON = JSON.parse(patient);
    const { fullname, status, cpf } = patientJSON

    // Queremos listar o nome dos pacientes e seu status
    // Criar uma <li> para cada paciente
    let newLi = document.createElement('li');

    // Atribuindo uma identificação para o li...
    newLi.setAttribute('dataPatientId', `${cpf}`)
    newLi.innerHTML = `${fullname} - ${status}`
    let patientUl = document.querySelector('#patientUl')
    patientUl.appendChild(newLi)

    // Criando um botão que possa alterar o status
    let editBtn = document.createElement('button')
    editBtn.innerHTML = 'Editar'
    // Dando funcionalidade ao botão
    editBtn.addEventListener('click', openModal)
    // Classe de estilização para o botão
    editBtn.classList.add('btn-changer')
    newLi.appendChild(editBtn)


  }
}

const ListPatients = () => {
  return <>
    <GlobalStyle />
    <Header>
      <img
        src={logo} alt="Interprocess logo"
        style={{ maxWidth: '250px' }} />
    </Header>
    <Title>Ver/editar pacientes
      <span>Veja os pacientes cadastrados</span>
    </Title>
    <MainButton onClick={patientList}>
      <span>Clique para ver os pacientes</span>
    </MainButton>
    {/* Aqui vai a lista de pacientes */}
    <ul id="patientUl">

    </ul>

    <Footer></Footer>
  </>;
};

export default ListPatients;
