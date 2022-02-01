import React from 'react';
import { MainButton, SecButton, Title, Header, Footer } from './styles';
// import Form from './Form';
import GlobalStyle from './globalStyle';
import addnew from './img/addnew.png';
import search from './img/search.png'
// Criando uma função para aplicar estilos globalmente

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header>

      </Header>
      <Title>
        Bem-vindo,
        <span>Usuário</span>
        <p>Selecione uma opção para continuar.</p>
      </Title>
      <MainButton>
        <img
          src={addnew}
          alt="Adicionar um novo paciente"
          style={{
            width: "56px",
            marginLeft: "-24px",
          }}
        />
        <span>Cadastrar novo paciente</span>
      </MainButton>
      <MainButton>
        <img
          src={search}
          alt="Ver/editar pacientes"
          style={{
            width: "48px",
            marginLeft: "-64px",
            paddingRight: "6px"
          }}
        />
        <span>Ver/editar pacientes</span>
      </MainButton>
      <SecButton>
        <span>Sair</span>
      </SecButton>
      <Footer></Footer>
      {/* <Form /> */}
    </div>
  );
}
document.getElementById('root')
export default App;
