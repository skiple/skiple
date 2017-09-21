import axios from 'axios'
import qs from 'qs'

import { SIGN_IN, SIGN_UP, LOG_OUT, GET_PROFILE } from './const'

export async function signIn (email, password) {
  const user = await axios.post('/signin',
    qs.stringify({
      email,
      password
    })
  )

  localStorage.setItem('firstName', user.data.user.first_name)
  localStorage.setItem('token', user.data.api_token)

  return {
    type: SIGN_IN,
    payload: user
  }
}

export async function signUp (data) {
  const request = await axios.post('/signup', qs.stringify(data))

  localStorage.setItem('firstName', request.data.user.first_name)
  localStorage.setItem('token', request.data.api_token)

  return {
    type: SIGN_UP
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

export async function changePassword (data) {
  await axios.post('/change_password', qs.stringify(data), {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

  return {}
}

export async function getProfile () {
  const res = await axios.get('/get_profile', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })

  return {
    type: GET_PROFILE,
    payload: res
  }
}
