// Aqui se encontra a lógica para a validação do formulário de cadastro.
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