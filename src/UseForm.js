// Custom Hook
import { useState, useEffect } from 'react'
import validateInfo from './validateInfo'

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    fullname: '',
    birthday: '',
    // O CPF será também a key para o localstorage
    cpf: '',
    gender: 'm',
    address: '',
    status: 'active'
  })
  const [errors, setErrors] = useState({})
  const [ísSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validateInfo(values))
    setIsSubmitting(true)
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && ísSubmitting) {
        callback()
      }
    },
    [errors]
  )

  return { handleChange, values, handleSubmit, errors }
}

export default useForm;