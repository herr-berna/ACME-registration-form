// Aqui se encontra a lógica para a validação do formulário de cadastro.

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


export default function validateInfo(values) {
  let errors = {}

  if (!values.fullname) {
    errors.fullname = 'É necessário digitar o nome completo.'
  }
  if (!values.birthday) {
    errors.birthday = 'É necessário adicionar uma data de nascimento.'
  }
  if (!values.cpf) {
    errors.cpf = 'É necessário digitar o CPF.'
  }

  return errors
}