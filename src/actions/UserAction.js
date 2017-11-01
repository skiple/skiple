import axios from 'axios'
import qs from 'qs'
import {
  SIGN_IN,
  SIGN_UP,
  GET_PROFILE,
  UPDATE_DATA_PROFILE
} from './types'
import { selectedActivity } from 'actions'

export const updateEditProfileData = ({ prop, value }) => {
  return {
    type: UPDATE_DATA_PROFILE,
    payload: { prop, value }
  }
}

export const signIn = (email, password) => {
  return (dispatch) => {
    axios.post('/signin',
      qs.stringify({
        email,
        password
      })
    )
      .then(res => signInSuccess(dispatch, res))
  }
}

export const signInForOrder = (email, password, router, data) => {
  return (dispatch) => {
    axios.post('/signin',
      qs.stringify({
        email,
        password
      })
    )
      .then(res => signInForOrderSuccess(dispatch, res, router, data))
  }
}

export const signUp = async (data) => {
  const request = await axios.post('/signup', qs.stringify(data))

  localStorage.setItem('firstName', request.data.user.first_name)
  localStorage.setItem('token', request.data.api_token)

  return {
    type: SIGN_UP
  }
}

export const signOut = () => {
  return () => {
    axios.get('/logout', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(signOutSuccess())
  }
}

export const changePassword = (data) => {
  return () => {
    axios.post('/change_password', qs.stringify(data), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => changePasswordSuccess())
  }
}

export const getProfile = () => {
  return (dispatch) => {
    axios.get('/get_profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => getProfileSuccess(dispatch, res))
  }
}

export const editProfile = (data) => {
  return () => {
    axios.post('/edit_profile', qs.stringify(data), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => editProfileSuccess())
      .catch(err => console.log(err.response))
  }
}

export const forgotPassword = ({ email }) => {
  return () => {
    axios.post('/forgot_password', qs.stringify({ email }), {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => forgotPasswordSuccess())
  }
}

const signInSuccess = (dispatch, res) => {
  localStorage.setItem('firstName', res.data.user.first_name)
  localStorage.setItem('token', res.data.api_token)
  window.location.reload()
  dispatch({
    type: SIGN_IN,
    payload: res
  })
}

const signInForOrderSuccess = (dispatch, res, router, data) => {
  localStorage.setItem('firstName', res.data.user.first_name)
  localStorage.setItem('token', res.data.api_token)
  $('.myModalAuth').modal('hide')
  selectedActivity(data.activity, data.date)
  router.push('/checkout')
  dispatch({
    type: SIGN_IN,
    payload: res
  })
}

const signOutSuccess = () => {
  localStorage.clear()
  window.location.href = '/'
}

const getProfileSuccess = (dispatch, res) => {
  dispatch({
    type: GET_PROFILE,
    payload: res.data
  })
}

const editProfileSuccess = () => {
  window.location.reload()
}

const changePasswordSuccess = () => {
  window.location.href = '/'
}

const forgotPasswordSuccess = () => {
  window.location.href = '/'
}
