import React, { useState } from 'react';
import { CircularProgress, Select, MenuItem, InputLabel, FormControl, TextField, Button, Box, Typography } from '@mui/material';

const GenerateImage = ({ onSubmit, loading }) => {
  const [tool, setTool] = useState('');
  const [style, setStyle] = useState('');
  const [object1, setObject1] = useState('');
  const [object2, setObject2] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 提交邏輯
    console.log({ tool, style, object1, object2, relationship });
    let items = [];
    if (object1) {
      items.push(object1);
    }
    if (object2 && tool == 3) {
      items.push(object2);
    }

    onSubmit({ action: tool, style, items, relationship });
  };
  const objectLabel = tool == 2 ? '例如: 警察、醫生、母親' : '例如: 桌子、耳機、手錶';
  return (
    <Box sx={{ color: 'white', padding: 3, width: '40%' }}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="tool-label" style={{color: '#eeeeee'}}>請選擇工具</InputLabel>
          <Select
            labelId="tool-label"
            value={tool}
            label="工具"
            style={{color: '#eeeeee', borderColor: '#eeeeee'}}
            onChange={(e) => setTool(e.target.value)}
          >
            <MenuItem value={1}>物件生成</MenuItem>
            <MenuItem value={2}>人生生成</MenuItem>
            <MenuItem value={3}>物件關係</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="style-label">請選擇風格</InputLabel>
          <Select
            labelId="style-label"
            value={style}
            label="風格"
            onChange={(e) => setStyle(e.target.value)}
          >
            <MenuItem value={0}>單一線條、色塊</MenuItem>
            <MenuItem value={1}>平面插畫</MenuItem>
            <MenuItem value={2}>擬真</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label={objectLabel}
          margin="normal"
          value={object1}
          onChange={(e) => setObject1(e.target.value)}
        />

        {tool === 3 && (
          <>
            <TextField
              fullWidth
              label={objectLabel}
              margin="normal"
              value={object2}
              onChange={(e) => setObject2(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
              <InputLabel id="relationship-label">關鍵字 關係</InputLabel>
              <Select
                labelId="relationship-label"
                value={relationship}
                label="例如: 物件一在物件二的”何處"
                onChange={(e) => setRelationship(e.target.value)}
              >
                <MenuItem value="上面">在...上面</MenuItem>
                <MenuItem value="下面">在...下面</MenuItem>
                <MenuItem value="裡面">在...裡面</MenuItem>
                <MenuItem value="外面">在...外面</MenuItem>
              </Select>
            </FormControl>
          </>
        )}

        <Button type="submit" variant="contained" color="primary" margin="normal">
          {
            loading &&
            <CircularProgress />
          }
          {
            !loading &&
            '生成'
          }
        </Button>
      </form>
    </Box>
  );
};

export default GenerateImage;
