import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  Button,
  CartContainer,
  CepNumero,
  InputGroup,
  Overlay,
  Sidebar
} from './styles'
import {
  closeEntrega,
  open,
  openPagamento,
  setDelivery
} from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

const Entrega = () => {
  const { isEntregaOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const fecharEntrega = () => {
    dispatch(closeEntrega())
  }

  const VoltarCarrinho = () => {
    dispatch(closeEntrega())
    dispatch(open())
  }

  const ParaoPagamento = () => {
    dispatch(closeEntrega())
    dispatch(openPagamento())
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 letras')
        .required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().min(9, 'CEP inválido').required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      const deliveryAddress = {
        description: values.endereco,
        city: values.cidade,
        zipCode: values.cep,
        number: Number(values.numero),
        complement: values.complemento
      }

      const delivery = {
        receiver: values.fullName,
        address: deliveryAddress
      }

      dispatch(setDelivery(delivery))
      ParaoPagamento()
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message

    return ''
  }

  return (
    <>
      <CartContainer className={isEntregaOpen ? 'is-open-cartentrega' : ''}>
        <Overlay onClick={fecharEntrega} />
        <Sidebar>
          <h3>Dados de entrega</h3>
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={form.handleChange}
                value={form.values.fullName}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'red', fontWeight: 'bold' }}>
                {getErrorMessage('fullName', form.errors.fullName)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="endereco">Endereço</label>
              <input
                id="endereco"
                name="endereco"
                type="text"
                onChange={form.handleChange}
                value={form.values.endereco}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'red', fontWeight: 'bold' }}>
                {getErrorMessage('endereco', form.errors.endereco)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cidade">Cidade</label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                onChange={form.handleChange}
                value={form.values.cidade}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'red', fontWeight: 'bold' }}>
                {getErrorMessage('cidade', form.errors.cidade)}
              </small>
            </InputGroup>
            <CepNumero>
              <InputGroup>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  mask="99999-999"
                  id="cep"
                  name="cep"
                  type="text"
                  onChange={form.handleChange}
                  value={form.values.cep}
                  onBlur={form.handleBlur}
                ></InputMask>
                <small style={{ color: 'red', fontWeight: 'bold' }}>
                  {getErrorMessage('cep', form.errors.cep)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="numero">Número</label>
                <input
                  id="numero"
                  name="numero"
                  type="text"
                  onChange={form.handleChange}
                  value={form.values.numero}
                  onBlur={form.handleBlur}
                />
                <small style={{ color: 'red', fontWeight: 'bold' }}>
                  {getErrorMessage('numero', form.errors.numero)}
                </small>
              </InputGroup>
            </CepNumero>
            <InputGroup>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input
                id="complemento"
                name="complemento"
                type="text"
                onChange={form.handleChange}
                value={form.values.complemento}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'red', fontWeight: 'bold' }}>
                {getErrorMessage('complemento', form.errors.complemento)}
              </small>
            </InputGroup>
            <Button type="submit">Continuar com o pagamento</Button>
          </form>
          <Button onClick={VoltarCarrinho}>Voltar para o carrinho</Button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Entrega
