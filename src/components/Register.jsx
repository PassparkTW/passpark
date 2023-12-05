// src/components/Register.js
import React from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components'
import { ButtonBorderColor } from '../settings/color';

const RegisterPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ButtonBorderColor};
    padding: 2rem;
    margin: 2rem;
    border-radius: 15px;
    min-width: 5vw;
`

const RegisterStatement = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
  margin-left: 1rem;
`

const StyledTextField = styled(TextField)`
  color: #F3F0E9;
  border: 1px solid #D3D3D3 !important;
  border-radius: 15px !important;
  width: 40vw;
  margin: 1rem 0 !important;
`

const RegisterButton = ({ onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClick}
        >
          <RegisterStatement>提交</RegisterStatement>
        </Button>
    )
}

const CustomizeTextField = ({ value, onChange }) => (
  <StyledTextField
    multiline
    value={value}
    onChange={onChange}
    rows={4} // 可以调整行数
    placeholder="你是怎麼知道這個服務的呢？"
    sx={{
      textarea: {
        color: '#FFF8DC',
      }, // 设置文本颜色为白色
      // 你也可以在这里添加其他样式，如背景色、边框等
    }}
  />
);

const Register = ({ reason, onReasonChange, onSubmit }) => {
    return (
            <RegisterPanel>
              <CustomizeTextField
                value={reason}
                onChange={onReasonChange}
              />
              <RegisterButton onClick={onSubmit}/>
            </RegisterPanel>
    );

}

export default Register;