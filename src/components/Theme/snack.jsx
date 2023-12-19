import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React from "react";


const SnackPanel = ({ snackContainer, onChangeSnackContainerChange, snackName, onChangeSnackName, sauceName, onChangeSauce, position, onChangePos }) => {
  return (
    <>
      <TextField
        fullWidth
        label="食物名稱 (例如: 黑色豬血糕)"
        margin="normal"
        value={snackName}
        onChange={(e) => onChangeSnackName(e.target.value)}
      />
      <TextField
        fullWidth
        label="請描述食物的容器 (例如: 插在竹籤上)"
        margin="normal"
        value={snackContainer}
        onChange={(e) => onChangeSnackContainerChange(e.target.value)}
      />
      <TextField
        fullWidth
        label="請描述食物的配料 (例如:上面灑滿了花生粉跟香菜) "
        margin="normal"
        value={sauceName}
        onChange={(e) => onChangeSauce(e.target.value)}
      />
    </>
  )
}


export default SnackPanel