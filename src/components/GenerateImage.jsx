import React, {useEffect, useState} from 'react';
import { CircularProgress, Select, MenuItem, InputLabel, FormControl, TextField, Button, Box, Typography } from '@mui/material';

const GenerateImage = ({ onSubmit, loading }) => {
  const [temp, setTemp] = useState('')
  const [tempId, setTempId] = useState('')
  const [templateMap, setTemplateMap] = useState({})
  const [prompt, setPrompt] = useState('')
  const [tags, setTags] = useState('')
  const templates = [
    {
      "id": "60ceff04-02d4-41ed-87a7-9edb40b94f47",
      "prompt": "小朋友溜滑梯。人物要有五官，人物要全身。"
    },
    {
      "id": "e31a0468-3b2b-4954-87d9-39b9b793cab9",
      "prompt": "走樓梯，人物為成年"
    },
    {
      "id": "7cc7e81e-26b7-4ab7-b270-a1cc6119f4ba",
      "prompt": "鍋子、菜刀；砧板"
    },
    {
      "id": "57ede0b9-346e-4ed0-a15e-2b765eaf432b",
      "prompt": "麥當勞炸雞、薯條。"
    },
    {
      "id": "d2f57621-309e-4d92-b4c8-76ce41303080",
      "prompt": "搭乘飛機，人物坐在機艙裏面正在服務，中間走道有空服人員，人物要有五官。"
    }
  ]
  useEffect(() => {
    const mapping = {}
    templates.forEach((template) => {
      mapping[template.id] = template.prompt
    })
    setTemplateMap(mapping)
  })
  const handleChangeTemplate = (templateId) => {
    console.log('templateId', templateId)
    setTempId(templateId)
    setTemp(templateMap[templateId])
  }

  return (
    <Box sx={{ color: 'white', padding: 3, width: '40%' }}>
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ prompt, tags })
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
                <MenuItem key={key} value={template.id}>{template.prompt}</MenuItem>
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
          label="請嘗試描述想要圖片的目標人群，例如：老人,心智障礙(逗號分格)"
          margin="normal"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
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
