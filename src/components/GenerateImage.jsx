import React, {useEffect, useState} from 'react';
import { CircularProgress, Select, MenuItem, InputLabel, FormControl, TextField, Button, Box, Typography } from '@mui/material';

const GenerateImage = ({ onSubmit, loading, templates }) => {
  const [temp, setTemp] = useState('')
  const [tempId, setTempId] = useState('')
  const [templateMap, setTemplateMap] = useState({})
  const [prompt, setPrompt] = useState('')
  useEffect(() => {
    const mapping = {}
    templates.forEach((template) => {
      mapping[template.ID] = template.Prompt
    })
    setTemplateMap(mapping)
  }, [templates])
  const handleChangeTemplate = (templateId) => {
    console.log('templateId', templateId)
    setTempId(templateId)
    setTemp(templateMap[templateId])
  }

  return (
    <Box sx={{ color: 'white', padding: 3, width: '40%' }}>
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(prompt)
      }}>

        <FormControl fullWidth margin="normal">
          <InputLabel id="tool-label" style={{color: '#eeeeee'}}>不知道怎麼描述嗎？選擇一個範本吧！</InputLabel>
          <Select
            labelId="tool-label"
            value={tempId}
            label="主題"
            style={{color: '#eeeeee', borderColor: '#eeeeee'}}
            onChange={(e) => handleChangeTemplate(e.target.value)}
          >
            {
              templates.map((template, key) => (
                <MenuItem key={key} value={template.ID}>{template.Title}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <TextField
          fullWidth
          multiline
          disabled={true}
          label="範本內容"
          value={temp}
          margin="normal"
          rows={4}
        />
        <TextField
          fullWidth
          multiline
          label="請嘗試描述想要產生的物品或情境"
          margin="normal"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
        />
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
