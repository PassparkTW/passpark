const HOST = 'http://localhost:8080'
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
      'Content-Type': 'application/json'
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