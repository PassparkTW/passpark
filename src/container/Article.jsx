import Article from "../components/Article";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { getArticle } from "../actions/actions";

const ArticleImpl = () => {
    const { articleId } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const { article: data } = await getArticle({ articleId })
            if (!data) {
                navigate('/')
            }
            if (data) {
                setArticle(data)
            }
            setLoading(false)
            return
        })()
    }, [articleId, navigate])
    const render = loading ? <CircularProgress /> : <Article article={article} />
    return (
      <>
      {render}
      </>
    )
}

export default ArticleImpl