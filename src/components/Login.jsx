// src/components/Login.js
import React from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components'
import { ButtonBorderColor } from '../settings/color';
import GoogleIcon from '@mui/icons-material/Google';

const LoginPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ButtonBorderColor};
    padding: 2rem;
    margin: 2rem;
    border-radius: 15px;
    min-width: 50vw;
`

const LoginStatement = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
  margin-left: 1rem;
`

const LoginButton = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClick}
        >
          <GoogleIcon />
          <LoginStatement>使用Google登入</LoginStatement>
        </Button>
    )
}


const Login = ({ onLogin }) => {
    return (
            <LoginPanel>
                <LoginButton onClick={onLogin}/>
            </LoginPanel>
    );

}

export default Login;