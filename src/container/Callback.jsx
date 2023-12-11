import React, { useEffect } from 'react';
import { authCallback } from '../actions/actions';
import {useNavigate} from 'react-router-dom';
import { useUser } from '../actions/store/auth';
const Callback = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const code = params.get('code');
    (async () => {
      if (code) {
        const { statusCode, data } = await authCallback({ code })
        if (statusCode >= 300) {
          return
        }
        login(data)
        if (statusCode === 200) {
          navigate('/')
          return
        }
        navigate('/register')
      } else {

      }
    })()
  })
  return (
    <div>登录处理中...</div>
  )
}

export default Callback;