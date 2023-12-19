import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React from "react";


const SportPanel = ({ sportName, onSportNameChange, age, onAgeChange }) => {
  return (
    <>
      <TextField
        fullWidth
        label="運動名稱 (例如: 瑜珈、足球)"
        margin="normal"
        value={sportName}
        onChange={(e) => onSportNameChange(e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="relationship-label">年齡</InputLabel>
        <Select
          labelId="relationship-label"
          value={age}
          label="例如: 人物年齡的設定"
          onChange={(e) => onAgeChange(e.target.value)}
        >
          <MenuItem value="幼童">幼童</MenuItem>
          <MenuItem value="青少年">青少年</MenuItem>
          <MenuItem value="青少女">青少女</MenuItem>
          <MenuItem value="成人">成人</MenuItem>
          <MenuItem value="中年">中年</MenuItem>
          <MenuItem value="老年">老年</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SportPanel