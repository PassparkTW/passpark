import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React from "react";


const FestivalPanel = ({ color, onColorChange, itemName, onItemChange, shape, onChangeShape, comment, onCommentChange }) => {
  return (
    <>
      <TextField
        fullWidth
        label="用品名稱 (例如: 線香)"
        margin="normal"
        value={itemName}
        onChange={(e) => onItemChange(e.target.value)}
      />
      <TextField
        fullWidth
        label="用品顏色 (例如: 土黃色)"
        margin="normal"
        value={color}
        onChange={(e) => onColorChange(e.target.value)}
      />
      <TextField
        fullWidth
        label="請描述用品的形狀 (例如: 細細長長的) "
        margin="normal"
        value={shape}
        onChange={(e) => onChangeShape(e.target.value)}
      />
      <TextField
        fullWidth
        label="請描述用品的細節 (例如: 正在燃燒中、直立著插在香爐裡、上面有未掉落的香灰)"
        margin="normal"
        value={comment}
        onChange={(e) => onCommentChange(e.target.value)}
      />
    </>
  )
}

export default FestivalPanel