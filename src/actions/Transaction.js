import axios from 'axios'
import qs from 'qs'

import {
  GET_ALL_TRANSACTION,
  PAYMENT_CONFIRMATION
} from './const'

const token = localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export async function getAllTransaction () {
  const request = await axios.get('/transaction')

  return {
    type: GET_ALL_TRANSACTION,
    payload: request
  }
}

export async function createNewTransaction (quantity, date, idActivity) {
  await axios.post('/transaction',
    qs.stringify({
      quantity,
      date,
      id_activity: idActivity
    })
  )

  return {
    type: {}
  }
}

export async function paymentConfirmation (data) {
  await axios.post('/transaction/payment', qs.stringify(data))

  return {
    type: PAYMENT_CONFIRMATION
  }
}
