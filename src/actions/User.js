import axios from 'axios'
import qs from 'qs'

import { SIGN_IN, LOG_OUT } from './const'

export async function signIn (email, password) {
  const request = await axios.post('/signin',
    qs.stringify({
      email,
      password
    })
  )

  localStorage.setItem('firstName', request.data.user.first_name)
  localStorage.setItem('token', request.data.api_token)

  const data = await axios.get('/transaction', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

  localStorage.setItem('totalTransaction', data.data.transactions.length)

  return {
    type: SIGN_IN,
    payload: request
  }
}

export async function signOut () {
  await axios.get('/logout', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

  return {
    type: LOG_OUT
  }
}
