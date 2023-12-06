const HOST = 'https://g0zu4yxwo8.execute-api.ap-northeast-1.amazonaws.com/prod'
// const HOST = 'http://localhost:8080'

export const getUserData = (code) => {
  return fetch(`${HOST}/auth/callback?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  })
}

export const submitSurvey = (reason) => {
  return fetch(`${HOST}/survey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ reason }),
    credentials: 'include',
    mode: 'cors'
  })
}

export const getArticle = ({ articleId }) => {
  return fetch(`${HOST}/article/${articleId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}

export const generateImage = (data) => {
  return fetch(`${HOST}/generate`, {
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
  return fetch(`${HOST}/articles?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}