import axios from 'axios'

import {
  GET_PAYMENT_METHOD
} from './const'

export async function getPaymentMethod () {
  const request = await axios.get('/payment', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

  return {
    type: GET_PAYMENT_METHOD,
    payload: request
  }
}
