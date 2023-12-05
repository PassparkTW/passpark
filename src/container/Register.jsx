// src/components/Login.js
import React, { useState } from 'react';
import Register from "../components/Register";
import {submitSurvey} from "../actions/actions";
import {useNavigate} from "react-router-dom";


const RegisterImpl = () => {
    const [reason, setReason] = useState('')
  const navigate = useNavigate();
  const onSubmit = () => {
    (async() => {
      const { statusCode } = await submitSurvey({ reason })
      if (statusCode >= 300) {
        return
      }
      navigate('/')

    })()
  }

    return (
      <Register
        reason={reason}
        onReasonChange={(e) => {
          setReason(e.target.value)
        }}
        onSubmit={onSubmit}
      />
    );

}

export default RegisterImpl;