// Aqui é o formulário que recebe os dados

import React from 'react';
import { Title } from './styles';
// Para administrar o form, utilizei react-hook-form, uma lib que torna esse processo mais fácil.
import { useForm } from 'react-hook-form'
// import { render } from '@testing-library/react';
// import FormSuccess from './FormSuccess';


/*
function handleSubmit(e) {
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
      // Faremos uma comparação do CPF com a Key
      let key = localStorage.key(i);
      if (key === cpf) {
        // Erro do CPF (errors += cpf...)
      }
      else {
        // Pegamos o JSON -> stringify
        let formDataString = JSON.stringify(formDataObject)
        // Usamos o CPF como chave para guardar o objeto
        localStorage.setItem(cpf, formDataString)
        return (
          <>
            <FormSuccess />
          </>
        )
      }
    }

  } else {
    // Não há itens - Podemos adicionar esse registro. 
    let formDataString = JSON.stringify(formDataObject)
    localStorage.setItem(cpf, formDataString)
    return (
      <>
        <FormSuccess />
      </>
    )
  }
}
*/

const FormSignUp = () => {
  // Pegamos a função do react-hook-form e a destruturamos
  const { register, handleSubmit } = useForm()

  const showConsole = (data) => {
    console.log(data)
  }

  return (<div className="form-content">
    {/* Para tratar uma form com javascript, adicionamos um handler ao evento onSubmit */}
    <form onSubmit={handleSubmit(showConsole)} className="form">
      <Title>Cadastrar novo paciente</Title>
      {/* NOME COMPLETO: */}
      <div className="form-inputs">
        <label htmlFor="fullname" className="form-label">Nome Completo*:
          {/* No atributo value do <input>, referenciamos a propriedade state do objeto FormSignUp, e pegamos o elemento desejado (fullname) */}
          <input
            type="text"
            id="fullname"
            name="fullname"
            // Com a propriedade 'ref', não precisamos cuidar manualmente do value do input
            ref={register}
            placeholder="Digite o nome completo"
            required />
        </label>
      </div>
      {/* DATA DE NASCIMENTO */}
      <div className="form-inputs">
        <label htmlFor="birthday" className="form-label">Data de nascimento*:
          <input
            type="date"
            id="birthday"
            name="birthday"
            ref={register}
          />
        </label>
      </div>
      {/* CPF */}
      <div className="form-inputs">
        <label htmlFor="cpf" className="form-label">CPF
          <input
            type="text"
            id="cpf"
            name="cpf"
            ref={register}
            placeholder="Digite o CPF (apenas números)"
            className="form-input" />
        </label>
      </div>
      {/* GÊNERO */}
      <div className="form-inputs">
        <label htmlFor="gender" className="form-label">Gênero
          <select
            id="gender"
            name="gender"
            ref={register}
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
            id="address"
            name="address"
            ref={register}
            placeholder="Digite o endereço"
          />
        </label>
      </div>
      {/* STATUS */}
      <div className="form-inputs">
        <label htmlFor="status" className="form-label">Status
          <select
            id="status"
            name="status"
            ref={register}
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
  );

};

export default FormSignUp;




// {/* <script src="localStorage.js"></script> */ }


