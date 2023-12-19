// src/components/Register.js
import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import styled from 'styled-components'

const RegisterPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const ReasonField = ({ reason, onChange }) => (
  <StyledTextField
    multiline
    value={reason}
    onChange={(e) => onChange(e.target.value)}
    rows={4} // 可以调整行数
    placeholder={"為什麼想要使用此工具呢？（歡迎讓我們多了解，以發展適合您的工具）"}
  />
);

const NameField = ({ name, onNameChange, error }) => (
  <StyledTextField
    value={name}
    onChange={(e) => onNameChange(e.target.value)}
    placeholder={"您的姓名"}
    error={error.name}
    helperText={error.name ? "姓名未填寫" : null}
  />
);

const CareerField = ({ career, onCareer }) => (
  <StyledTextField
    value={career}
    onChange={(e) => onCareer(e.target.value)}
    placeholder={"您目前的職業是"}
  />
);

const GenderSelection = ({ gender, onGender }) => (
  <FormControl fullWidth margin="normal">
    <InputLabel id="relationship-label">您的性別</InputLabel>
    <Select
      labelId="relationship-label"
      label="您的性別"
      value={gender}
      onChange={(e) => onGender(e.target.value)}
    >
      <MenuItem value="male">生理男</MenuItem>
      <MenuItem value="female">生理女</MenuItem>
      <MenuItem value="other">其他</MenuItem>
    </Select>
  </FormControl>
)

const AgeSelection = ({ age, onAge }) => (
  <FormControl fullWidth margin="normal">
    <InputLabel id="relationship-label">您的年齡落在哪個區間</InputLabel>
    <Select
      labelId="relationship-label"
      label="您的年齡落在哪個區間"
      value={age}
      onChange={(e) => onAge(e.target.value)}
    >
      <MenuItem value="20">20-30歲</MenuItem>
      <MenuItem value="30">31-40歲</MenuItem>
      <MenuItem value="40">41-50歲</MenuItem>
      <MenuItem value="50">51-60歲</MenuItem>
      <MenuItem value="60">60歲(含)以上</MenuItem>
    </Select>
  </FormControl>
)

const Register = ({ onSubmit }) => {
  const [gender, setGender] = React.useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [reason, setReason] = React.useState('');
  const [career, setCareer] = React.useState('');
  const [error, setError] = React.useState({
    career: false,
    reason: false,
    name: false,
    age: false,
    gender: false
  });
  const checkError = () => {
    const err = {}
    err.career = !career;
    err.reason = !reason;
    err.name = !name;
    err.gender = !gender;
    err.age = !age;
    setError(err);
  }

  const onSubmitClick = () => {
    checkError()
    if (error.name) {
      return
    } else {
      const form = {name, age, gender, career, reason}
      onSubmit(form)
    }
  }
  return (
    <RegisterPanel>
      <NameField
        name={name}
        onNameChange={setName}
        error={error}
      />
      <GenderSelection
        gender={gender}
        onGender={setGender}
      />
      <AgeSelection
        age={age}
        onAge={setAge}
      />
      <CareerField
        career={career}
        onCareer={setCareer}
      />
      <ReasonField
        value={reason}
        onChange={setReason}
      />
      <RegisterButton onClick={onSubmitClick}/>
    </RegisterPanel>
  );

}

export default Register;