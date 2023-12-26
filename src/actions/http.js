import config from '../config'


export const getTemplate = () => {
  return fetch(`${config.API_ENDPOINT}/templates`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  })

}
export const authCallback = (code) => {
  return fetch(`${config.API_ENDPOINT}/auth/callback?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  })
}

export const getUserData = () => {
  return fetch(`${config.API_ENDPOINT}/userInfo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    credentials: 'include',
    mode: 'cors'
  })
}

export const submitSurvey = (form) => {
  return fetch(`${config.API_ENDPOINT}/survey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(form),
    credentials: 'include',
    mode: 'cors'
  })
}

export const getArticle = ({ articleId }) => {
  return fetch(`${config.API_ENDPOINT}/article/${articleId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}

export const generateImage = (data) => {
  return fetch(`${config.API_ENDPOINT}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data),
    credentials: 'include',
    mode: 'cors'
  })
}

export const getImages = (page) => {
  return fetch(`${config.API_ENDPOINT}/articles?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}