import axios from 'axios'
import qs from 'qs'

import {
  GET_ALL_TRANSACTION,
  PAYMENT_CONFIRMATION
} from './types'

export const getAllTransaction = () => {
  return (dispatch) => {
    axios.get('/transaction', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => getAllTransactionSuccess(dispatch, res))
  }
}

export const createNewTransaction = (quantity, date, idActivity) => {
  return () => {
    axios.post('/transaction',
      qs.stringify({
        quantity,
        date,
        id_activity: idActivity
      }),
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
      .then(createNewTransactionSuccess())
  }
}

export const paymentConfirmation = async (data) => {
  await axios.post('/transaction/payment',
    qs.stringify(data), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

  return {
    type: PAYMENT_CONFIRMATION
  }
}

const getAllTransactionSuccess = (dispatch, res) => {
  dispatch({
    type: GET_ALL_TRANSACTION,
    payload: res
  })
}

const createNewTransactionSuccess = () => {
  window.location.href = '/transaction'
}
