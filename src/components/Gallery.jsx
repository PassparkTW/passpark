import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Snackbar from '@mui/material/Snackbar';
import ShareIcon from '@mui/icons-material/Share';
import InfiniteScroll from 'react-infinite-scroll-component';
import copy from 'copy-to-clipboard';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  height: auto;
  width: 100%;
`;

const Gallery = ({ hasMore, imageItems, moreImage }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // 模擬從後端加載數據
  const handleShare = (url) => {
    // 實現分享功能
    copy(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <GalleryContainer>
      <InfiniteScroll
        dataLength={imageItems.length}
        next={moreImage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <ImageList sx={{ width: '60%', height: 'auto' }} cols={5}>
          {imageItems.map((item, index) => (
            <ImageListItem key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.keyword}
                onClick={() => navigate(`/article/${item.id}`)}
                loading="lazy"
              />
              <ImageListItemBar
                title={`關鍵字:${item.keyword}`}
                subtitle={`@${item.authorName}`}
                actionIcon={
                  <IconButton onClick={() => handleShare(`${window.location.hostname}/article/${item.id}`)}>
                    <ShareIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </InfiniteScroll>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="連結已複製"
      />
    </GalleryContainer>
  );
};

export default Gallery;
