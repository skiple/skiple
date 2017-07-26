import axios from 'axios'
import qs from 'qs'

import { SIGN_IN, LOG_OUT } from './const'

const token = localStorage.getItem('token')
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export async function signIn (email, password) {
  const request = await axios.post('/signin',
    qs.stringify({
      email,
      password
    })
  )
  console.log(request)

  localStorage.setItem('firstName', request.data.user.first_name)
  localStorage.setItem('token', request.data.api_token)

  return {
    type: SIGN_IN,
    payload: request
  }
}

export async function signOut () {
  await axios.get('/logout')

  return {
    type: LOG_OUT
  }
}
