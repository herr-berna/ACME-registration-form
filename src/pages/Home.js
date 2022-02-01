import React from 'react';
import { MainButton, SecButton, Title, Header, Footer } from '../styles/styles';
// Importanto router para possibilitar a troca de telas
// Routes era chamado de Switch
import { Link } from 'react-router-dom';
import GlobalStyle from '../styles/globalStyle';
import addnew from '../img/addnew.png';
import search from '../img/search.png'

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      {/* Elemento Router cobre os outros */}

      <Header>
        <span>logo</span>
      </Header>
      <Title>
        Bem-vindo,
        <span>Usuário</span>
        <p>Selecione uma opção para continuar.</p>
      </Title>
      {/* Link para o Form */}
      <Link to="Form">
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

    </div >
  );
};

export default Home;
