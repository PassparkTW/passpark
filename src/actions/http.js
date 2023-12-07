export const getUserData = (code) => {
  return fetch(`${process.env.API_URL}/auth/callback?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
  })
}

export const submitSurvey = (reason) => {
  return fetch(`${process.env.API_URL}/survey`, {
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
  return fetch(`${process.env.API_URL}/article/${articleId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}

export const generateImage = (data) => {
  return fetch(`${process.env.API_URL}/generate`, {
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
  return fetch(`${process.env.API_URL}/articles?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
}