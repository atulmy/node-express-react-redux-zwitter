// Imports
import jwtDecode from 'jwt-decode'

// App Imports
import config from '../config'

export const USER_CURRENT_SET = 'USER_CURRENT_SET'

export function postLogin (credentials) {
  return dispatch => {
    return fetch(`${ config.url.api }user/login`, {
      method: 'post',

      body: JSON.stringify(credentials),

      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(response => {
        if (response.success) {
          const token = response.data.token

          localStorage.setItem('token', token)

          dispatch(setCurrentUser(jwtDecode(token)))
        }

        return response
      })
  }
}

export function postRegister (credentials) {
  return dispatch => {
    return fetch(`${ config.url.api }user/register`, {
      method: 'post',

      body: JSON.stringify(credentials),

      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
  }
}

export function setCurrentUser (user) {
  return {
    type: USER_CURRENT_SET,
    user
  }
}

export function userLogout () {
  return dispatch => {
    localStorage.removeItem('token')

    dispatch(setCurrentUser({}))

    return {success: true}
  }
}
