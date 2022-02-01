// Aqui é o formulário que recebe os dados

import React from 'react';
import GlobalStyle from './globalStyle';
import { Title, InputText } from './styles';
// Para administrar o form, utilizei react-hook-form, uma lib que torna esse processo mais fácil.
import { useForm } from 'react-hook-form'

const Form = () => {

  // Pegamos a função do react-hook-form e a destruturamos
  const { register, handleSubmit } = useForm()

  const showConsole = (data) => {
    console.log(data)
  }

  return (
    <>
      <GlobalStyle />
      <Title>Cadastrar novo paciente
        <span>Preencha o formulário.</span>
      </Title>
      <InputText>
        <label htmlFor="fullname">Nome completo*:</label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          // Com a propriedade 'ref', não precisamos cuidar manualmente do value do input
          // ref={register}
          placeholder="Digite o nome completo..."
          required />
      </InputText>
      <InputText>
        <label htmlFor="cpf">CPF*:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          // ref={register}
          placeholder="Digite o CPF..."
          required />
      </InputText>
      <InputText>
        <label htmlFor="address">Endereço: </label>
        <input
          type="text"
          id="address"
          name="address"

          // ref={register}
          placeholder="Digite o endereço..."
          required />
      </InputText>
    </>
  );
};

export default Form;