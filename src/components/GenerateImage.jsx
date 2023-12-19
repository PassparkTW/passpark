import React, { useState } from 'react';
import { CircularProgress, Select, MenuItem, InputLabel, FormControl, TextField, Button, Box, Typography } from '@mui/material';
import Snack from "./Theme/snack";
import FestivalPanel from "./Theme/festival";
import SportPanel from "./Theme/sport";

const GenerateImage = ({ onSubmit, loading }) => {
  const [tool, setTool] = useState('');
  const [object1, setObject1] = useState('');
  const [object2, setObject2] = useState('');
  const [object3, setObject3] = useState('');
  const [comment, setComment] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let items = [];
    let addition = '';
    let rel  = '';
    // 提交邏輯
    if (tool === 4) {
      if (!object1 || !object2) {
        alert('請填寫食物容器、食物名稱')
        return
      }
      items = [object1, object2];
      if (comment) {
        addition = comment;
      }
    }
    if (tool === 5) {
      if (!object1 || !object2 || !object3) {
        alert('請填寫顏色、用品名稱、形狀')
        return
      }
      items = [object1, object2, object3];
      if (comment) {
        addition = comment;
      }
    }
    if (tool === 6) {
      if (!object1 || !relationship) {
        alert('請填寫運動名稱、時期')
        return
      }
      items = [object1];
      rel = relationship;
    }
    onSubmit({ action: tool, items, relationship: rel, comment: addition });
  };
  return (
    <Box sx={{ color: 'white', padding: 3, width: '40%' }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="tool-label" style={{color: '#eeeeee'}}>請選擇主題</InputLabel>
          <Select
            labelId="tool-label"
            value={tool}
            label="主題"
            style={{color: '#eeeeee', borderColor: '#eeeeee'}}
            onChange={(e) => setTool(e.target.value)}
          >
            <MenuItem value={4}>台灣小吃</MenuItem>
            <MenuItem value={5}>節慶用品</MenuItem>
            <MenuItem value={6}>運動</MenuItem>
          </Select>
        </FormControl>
        {
          tool === 4 &&
          <Snack
            snackContainer={object1}
            onChangeSnackContainerChange={setObject1}
            snackName={object2}
            onChangeSnackName={setObject2}
            sauceName={comment}
            onChangeSauce={setComment}
            position={relationship}
            onChangePos={setRelationship}
          />
        }
        {
          tool === 5 &&
          <FestivalPanel
            color={object1}
            onColorChange={setObject1}
            itemName={object2}
            onItemChange={setObject2}
            shape={object3}
            onChangeShape={setObject3}
            comment={comment}
            onCommentChange={setComment}
          />
        }
        {
          tool === 6 &&
          <SportPanel
            sportName={object1}
            onSportNameChange={setObject1}
            age={relationship}
            onAgeChange={setRelationship}
          />
        }

        <Button type="submit" variant="contained" color="primary" margin="normal">
          {
            loading &&
            <CircularProgress />
          }
          {'生成'}
        </Button>
      </form>
    </Box>
  );
};

export default GenerateImage;
