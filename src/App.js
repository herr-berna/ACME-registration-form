import './App.css';
import Form from './Form';

// Criando uma função para aplicar estilos globalmente
function GlobalStyle() {
  return (
    <style global jsx>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background-color: #e7e7e7;
        }

        body {
          font-family: 'Roboto', sans-serif;
        }
      `}
    </style>
  )
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Form />
    </div>
  );
}

export default App;
