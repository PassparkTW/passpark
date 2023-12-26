// src/components/Login.js
import React from 'react';
import Register from "../components/Register";
import {submitSurvey} from "../actions/actions";
import {useNavigate} from "react-router-dom";
import {useUser} from "../actions/store/auth";


const RegisterImpl = () => {
  const {user, login} = useUser();
  const navigate = useNavigate();
  const onSubmit = (form) => {
    (async() => {
      const { statusCode } = await submitSurvey(form)
      if (statusCode >= 300) {
        return
      }
      login({...user, isDone: true})
      navigate('/')
    })()
  }

    return (
      <Register
        onSubmit={onSubmit}
      />
    );

}

export default RegisterImpl;