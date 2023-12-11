import * as HTTP from './http'

export const authCallback = async ({ code }) => {
  const res = await HTTP.authCallback(code)
  const statusCode = res.status
  const data = await res.json()
  if (statusCode === 201 || statusCode === 200) {
    localStorage.setItem('token', data.access_token)
  }
  return { statusCode, data }
}

export const getUserData = async () => {
  const res = await HTTP.getUserData()
  const statusCode = res.status
  if (statusCode === 401) {
    localStorage.removeItem('token')
    return null
  }
  const data = await res.json()
  return data
}


export const submitSurvey = async ({ reason }) => {
  const res = await HTTP.submitSurvey(reason)
  return res.status
}

export const getArticle = async ({ articleId }) => {
  const res = await HTTP.getArticle({ articleId })
  const statusCode = res.status
  const article = await res.json()
  if (statusCode === 404) {
    return {}
  }
  return { article }
}

export const generateImage = async (data) => {
  const res = await HTTP.generateImage(data)
  const statusCode = res.status
  const image = await res.json()
  return { statusCode, image }
}

export const getImages = async (page) => {
  const res = await HTTP.getImages(page)
  const { articles } = await res.json()
  return articles
}

export const doLoginSuccess = (payload) => ({
  type: 'SET_USER_DATA',
  payload,
})