import {useEffect, useState} from 'react'
import Gallery from '../components/Gallery'
import { getImageHistory } from '../actions/actions'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const moreImages = async ({ page, setPage, setHasMore, setImageItems }) => {
  const articles = await getImageHistory(page);
  if (articles.length === 0) {
    setHasMore(false);
  } else {
    setImageItems(prevItems => [...prevItems, ...articles]);
    setPage(prevPage => prevPage + 1);
  }
}

const ArticleHistory = () => {
  const [imageItems, setImageItems] = useState([]); // 圖片數據的初始狀態
  const [page, setPage] = useState(1); // 當前頁碼
  const [hasMore, setHasMore] = useState(true); // 是否還有更多圖片可以加載
  useEffect(() => {
    moreImages({ page, setPage, setHasMore, setImageItems })
  }, [])
  return (
    <Gallery imageItems={imageItems} hasMore={hasMore} moreImage={() => {
      moreImages({ page, setPage, setHasMore, setImageItems })
    }} />
  )
}

export default withAuthenticator(ArticleHistory)