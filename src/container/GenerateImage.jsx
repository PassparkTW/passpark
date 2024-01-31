// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {createSocket, subscribeTask} from '../utils/listener'

import GenerateImage from '../components/GenerateImage';
import { generateImage, getTemplates } from '../actions/actions';
import {useUser} from "../actions/store/auth";

const GenerateImageImpl = () => {
  const [loading, setLoading] = useState(false);
  const [listener, setListener] = useState(null);
  const navigate = useNavigate();
  
  const { login, user } = useUser();
  useEffect(() => {
    console.log('user', user)
    if (!user.username) {
      alert('請先登入')
      navigate('/login')
      return
    }
    if (user && !user.isDone) {
      alert('請先完成表單')
      navigate('/register')
      return
    }
  }, [])
  const onSubmit = ({ tags, prompt }) => {
    setLoading(true);
    (async () => {
      const { taskId, articleId, statusCode, needSurvey } = await generateImage({ prompt, tags: tags.split(',') });
      login({...user, needSurvey})
      if (statusCode === 202) {
        const eventListener = createSocket({ onMessage: (msg) => {

          const {taskID: doneTaskId} = msg
          if (doneTaskId === taskId) {
            setLoading(false);
            navigate(`/article/${articleId}`);
          }

        }, onOpen: () => {
            subscribeTask({taskId, socket: eventListener})
        }});

        setListener(eventListener)
        return
      }
      if (statusCode === 402) {
        alert("已經超過一天十次的額度，請明天再試")
        navigate('/')
        return
      }
    })()
  }
  return (
    <GenerateImage onSubmit={onSubmit} loading={loading} />
  );

}

export default GenerateImageImpl;