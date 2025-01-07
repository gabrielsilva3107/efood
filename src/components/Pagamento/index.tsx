import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  Button,
  CartContainer,
  CepNumero,
  InputGroup,
  NumeroCVV,
  Overlay,
  Sidebar
} from './styles'
import {
  closePagamento,
  openEntrega,
  openProcessadoPedido,
  setOrderId
} from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import InputMask from 'react-input-mask'

const Pagamento = () => {
  const { isPagamentoOpen, items, delivery, orderId } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const [purchase] = usePurchaseMutation()
  const fecharPagamento = () => {
    dispatch(closePagamento())
  }

  const voltarEntrega = () => {
    dispatch(closePagamento())
    dispatch(openEntrega())
  }

  const getTotalPrice = () => {
    return items
      .reduce((acumulador, item) => {
        return (
          acumulador +
          (item.cardapio
            ? item.cardapio.reduce(
                (subtotal, produto) => subtotal + produto.preco,
                0
              )
            : 0)
        )
      }, 0)
      .toLocaleString('pt-BR', { minimumFractionDigits: 2 })
  }

  const paraAConfirmacao = () => {
    dispatch(closePagamento())
    dispatch(openProcessadoPedido())
  }

  const form = useFormik({
    initialValues: {
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      nomeCartao: Yup.string().required('Campo obrigatório'),
      numeroCartao: Yup.string()
        .matches(
          /^\d{4} \d{4} \d{4} \d{4}$/,
          'O número do cartão deve ser no formato "0000 0000 0000 0000"'
        )
        .required('Campo obrigatório')
    }),
    onSubmit: async (values) => {
      const response = await purchase({
        products: items.flatMap((item) =>
          item.cardapio.map((produto) => ({
            id: produto.id,
            price: produto.preco
          }))
        ),
        delivery: {
          receiver: delivery?.receiver || 'string',
          address: {
            description: delivery?.address?.description || 'string',
            city: delivery?.address?.city || 'string',
            zipCode: delivery?.address?.zipCode || 'string',
            number: delivery?.address?.number || 0,
            complement: delivery?.address?.complement || 'string'
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: parseInt(values.cvv),
            expires: {
              month: parseInt(values.mesVencimento),
              year: parseInt(values.anoVencimento)
            }
          }
        }
      }).unwrap()

      console.log('ID do pedido:', response.orderId)
      dispatch(setOrderId(response.orderId))
      console.log(setOrderId)
      console.log('Estado do Redux:', orderId)
      paraAConfirmacao()
      dispatch(closePagamento())
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
      <CartContainer className={isPagamentoOpen ? 'is-open-pagamento' : ''}>
        <Overlay onClick={fecharPagamento} />
        <Sidebar>
          <h3>Pagamento - Valor a pagar R$ {getTotalPrice()}</h3>
          <form onSubmit={form.handleSubmit}>
            <InputGroup>
              <label htmlFor="nomeCartao">Nome do cartão</label>
              <input
                id="nomeCartao"
                name="nomeCartao"
                type="text"
                onChange={form.handleChange}
                value={form.values.nomeCartao}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'red', fontWeight: 'bold' }}>
                {getErrorMessage('nomeCartao', form.errors.nomeCartao)}
              </small>
            </InputGroup>
            <NumeroCVV>
              <InputGroup style={{ width: '228px' }}>
                <label htmlFor="numeroCartao">Número do cartão</label>
                <InputMask
                  id="numeroCartao"
                  name="numeroCartao"
                  mask="9999 9999 9999 9999"
                  onChange={form.handleChange}
                  value={form.values.numeroCartao}
                  onBlur={form.handleBlur}
                />
                <small style={{ color: 'red', fontWeight: 'bold' }}>
                  {getErrorMessage('numeroCartao', form.errors.numeroCartao)}
                </small>
              </InputGroup>
              <InputGroup style={{ width: '87px' }}>
                <label htmlFor="cvv">CVV</label>
                <InputMask
                  id="cvv"
                  name="cvv"
                  mask="999"
                  onChange={form.handleChange}
                  value={form.values.cvv}
                  onBlur={form.handleBlur}
                />
                <small style={{ color: 'red', fontWeight: 'bold' }}>
                  {getErrorMessage('cvv', form.errors.cvv)}
                </small>
              </InputGroup>
            </NumeroCVV>
            <CepNumero>
              <InputGroup>
                <label htmlFor="mesVencimento">Mês de vencimento</label>
                <InputMask
                  id="mesVencimento"
                  name="mesVencimento"
                  mask="99"
                  onChange={form.handleChange}
                  value={form.values.mesVencimento}
                  onBlur={form.handleBlur}
                />
                <small style={{ color: 'red', fontWeight: 'bold' }}>
                  {getErrorMessage('mesVencimento', form.errors.mesVencimento)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="anoVencimento">Ano de vencimento</label>
                <InputMask
                  id="anoVencimento"
                  name="anoVencimento"
                  mask="9999"
                  onChange={form.handleChange}
                  value={form.values.anoVencimento}
                  onBlur={form.handleBlur}
                />
                <small style={{ color: 'red', fontWeight: 'bold' }}>
                  {getErrorMessage('anoVencimento', form.errors.anoVencimento)}
                </small>
              </InputGroup>
            </CepNumero>
            <Button type="submit">Finalizar Pagamento</Button>
          </form>
          <Button onClick={voltarEntrega}>
            Voltar para a edição de endereço
          </Button>
        </Sidebar>
      </CartContainer>
    </>
  )
}

export default Pagamento
