import config from '../config'
import { currentSession } from '../utils/auth'
export const getTemplate = () => {
  return fetch(`${process.env.REACT_APP_API_HOST}/templates`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  })

}
export const authCallback = (code) => {
  return fetch(`${process.env.REACT_APP_API_HOST}/auth/callback?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  })
}

export const getUserData = async () => {
  const { accessToken } = await currentSession()
  return fetch(`${process.env.REACT_APP_API_HOST}/userInfo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    credentials: 'include',
    mode: 'cors'
  })
}

export const submitSurvey = async (form) => {
  const { accessToken } = await currentSession()
  return fetch(`${process.env.REACT_APP_API_HOST}/survey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(form),
    credentials: 'include',
    mode: 'cors'
  })
}

export const getArticle = ({ articleId }) => {
  return fetch(`${process.env.REACT_APP_API_HOST}/article/${articleId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}

export const generateImage = async (data) => {
  const { accessToken } = await currentSession()
  return fetch(`${process.env.REACT_APP_API_HOST}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify(data),
    credentials: 'include',
    mode: 'cors'
  })
}

export const getImages = (page) => {
  return fetch(`${process.env.REACT_APP_API_HOST}/articles?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}