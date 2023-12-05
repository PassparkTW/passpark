import React, { useEffect } from 'react';
import { getUserData } from '../actions/actions';
import {useNavigate} from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const search = window.location.search
    const params = new URLSearchParams(search)
    const code = params.get('code');
    (async () => {
      if (code) {
        const { statusCode } = await getUserData({ code })
        if (statusCode >= 300) {
          return
        }
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