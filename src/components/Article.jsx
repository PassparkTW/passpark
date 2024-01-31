import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import relativeTime from 'dayjs/plugin/relativeTime'
import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import {Avatar} from "@mui/material";
import Chip from '@mui/material/Chip';


dayjs.extend(relativeTime)

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1024px;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  flex: 15;
`

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1px solid #D3D3D3;
  height: 100%;
  flex: 3;
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid #D3D3D3;
  width: 100%;
  background-color: #313235;
`
const AuthorMetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`

const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
  color: #F3F0E9;
`

const AuthorMetaText = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`


const AuthorMeta = ({ createTime, username }) => {
  const createDate = dayjs(createTime).fromNow()
  return (
    <Row>
      <AuthorMetaContainer>
        <MetaContainer>
        <Avatar>{username}</Avatar>
        <AuthorInfoContainer>
          <AuthorMetaText>{username}</AuthorMetaText>
          <AuthorMetaText>{createDate}</AuthorMetaText>
        </AuthorInfoContainer>
        </MetaContainer>
      </AuthorMetaContainer>
    </Row>
  )
}

const ToolRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 1rem;
  width: 100%;
`

const ToolTitle = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  color: #F3F0E9;
  font-weight: 600;
 `

const ToolContent = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  font-weight: 400;
  margin-left: 1rem;
  color: #fff3e9;
`


const ToolInfo = ({ title, content }) => {
  return (
    <ToolRow>
      <ToolTitle>{title}</ToolTitle>
      <ToolContent>{content}</ToolContent>
    </ToolRow>
  )
}

const Tools = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 84%;
  `

const ToolInfos = ({ toolName, keyword, articleStyle }) => {
return (
    <Row>
      <Tools>
        <ToolInfo title="工具" content={toolName} />
        <ToolInfo title="關鍵字" content={keyword} />
        <ToolInfo title="風格" content={articleStyle} />
      </Tools>
    </Row>
  )
}

const Tags = ({ tags }) => {
  return (
    <Row>
      <ToolTitle>適用人群</ToolTitle>
      {
        tags.map(tag => {
          console.log(tag)
          return <Chip key={tag} label={tag}/>
        })
      }
    </Row>
  )
}


const Article = ({ article }) => {
  return (
    <ArticleContainer>
      <ImageContainer>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src={article.imageUrl}
          alt={article.keyword}
          />
      </ImageContainer>
      <AuthorContainer>
        <AuthorMeta username={article.authorName} datetime={article.date} />
        <ToolInfos toolName="卡通插圖易讀產生" articleStyle="卡通插畫" keyword={article.keyword} />
        <Tags tags={article.tags}/>
      </AuthorContainer>
    </ArticleContainer>
  )
}

export default Article