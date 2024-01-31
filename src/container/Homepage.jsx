import {useEffect, useState} from 'react'
import Gallery from '../components/Gallery'
import { getImages } from '../actions/actions'

const moreImages = async ({ page, setPage, setHasMore, setImageItems }) => {
    const articles = await getImages(page);
    if (articles.length === 0) {
        setHasMore(false);
    } else {
        const leastId = articles[articles.length - 1].dateId;
        const leastAuthorId = articles[articles.length - 1].authorId;
        setPage('ast_author_id=' + leastAuthorId + '&last_date_id=' + leastId);
        setImageItems(prevItems => [...prevItems, ...articles]);
        // setPage(prevPage => prevPage + 1);
    }
}

const Homepage = () => {
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

export default Homepage