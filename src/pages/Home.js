import React from 'react';
import { MainButton, SecButton, Title, Header, Footer } from '../styles/styles';
// Importanto router para possibilitar a troca de telas
// Routes era chamado de Switch
import { Link } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import addnew from '../img/addnew.png';
import search from '../img/search.png'
import logo from '../img/logo.png'

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      {/* Elemento Router cobre os outros */}

      <Header>
        <img
          src={logo} alt="Interprocess logo"
          style={{ maxWidth: '250px' }} />
      </Header>
      <Title>
        Bem-vindo,
        <span>Usuário</span>
        <p>Selecione uma opção para continuar.</p>
      </Title>
      {/* Link para o Form */}
      <Link to="Form" style={{ textDecoration: 'none' }}>
        <MainButton>
          <img
            src={addnew}
            alt="Adicionar um novo paciente"
            style={{
              width: "56px",
              marginLeft: "-24px",
            }}
          />
          <span
          >Cadastrar novo paciente</span>
        </MainButton>
      </Link>
      {/* Link para  lista de pacientes */}
      <Link to="ListPatients" style={{ textDecoration: 'none' }}>
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
      </Link>
      <SecButton>
        <span>Sair</span>
      </SecButton>
      <Footer></Footer>

    </div >
  );
};

export default Home;
