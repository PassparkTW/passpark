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


export const submitSurvey = async (form) => {
  const res = await HTTP.submitSurvey(form)
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
  const { article_id: articleId, task_id: taskId, need_survey: needSurvey } = await res.json()
  return { statusCode, articleId, taskId, needSurvey }
}

export const getImages = async (page) => {
  const res = await HTTP.getImages(page)
  const { articles } = await res.json()
  return articles
}

export const getTemplates = async () => {
  const res = await HTTP.getTemplate()
  const templates = await res.json()
  return templates
}

export const doLoginSuccess = (payload) => ({
  type: 'SET_USER_DATA',
  payload,
})