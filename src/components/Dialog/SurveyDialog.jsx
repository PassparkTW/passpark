import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SurveyDialog = ({ open, onClose  }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          感謝您使用圖易通，
          我們希望打造一個簡易使用且有易讀精神的AI生成圖片工具與圖庫，
          您的意見對我們十分重要，
          請依據您現在的使用心得，給予我們回饋，
          不論是正向或負向的意見，
          都可以協助我們呈現更好的工具給您！
          [問卷題數：7題，約3~5分鐘]

          問卷網址：<a href="https://www.surveycake.com/s/wOQBr" target={"_blank"}>https://www.surveycake.com/s/wOQBr</a>
        </Typography>
      </Box>
    </Modal>
  )
}


export default SurveyDialog;