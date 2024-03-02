import {useEffect, useState} from 'react'
import Gallery from '../components/Gallery'
import { getImageHistory } from '../actions/actions'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const moreImages = async ({ page, setPage, setHasMore, setImageItems }) => {
  const articles = await getImageHistory(page);
  if (!articles) {
    return
  }
  if (articles.length === 0) {
    setHasMore(false);
  } else {
    setImageItems(prevItems => [...prevItems, ...articles]);
    // as newest
    const leastId = articles[articles.length - 1].dateId;
    const leastAuthorId = articles[articles.length - 1].authorId;
    setPage('ast_author_id=' + leastAuthorId + '&last_date_id=' + leastId);
  }
}

const ArticleHistory = () => {
  const [imageItems, setImageItems] = useState([]); // 圖片數據的初始狀態
  const [page, setPage] = useState(''); // 當前頁碼
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