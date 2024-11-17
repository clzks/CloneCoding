import styled from "styled-components"
import { MdNewspaper } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import { MdOpenInNew } from 'react-icons/md';


const NewsList = () => {
  return (
    <NewsListPanel className="sideComponent">
      <NewsIcon>
        <AnnouncementIcon></AnnouncementIcon>
        <span>꺼무 뉴스</span>
      </NewsIcon>
      <News>첫번째 뉴스입니다. 샘플입니다.</News>
      <News>두번째 뉴스입니다. 샘플입니다.</News>
      <News>세번째</News>
      <News>4번째 뉴스입니다. 일부러 텍스트를 길게 처리해서 줄임 효과가 제대로 표시되는지 테스트 중입니다.</News>
      <News>5번째 뉴스입니다. 샘플입니다.</News>
      <ReadMoreButton >
        더 보기
        <MdOpenInNew></MdOpenInNew>
      </ReadMoreButton>
    </NewsListPanel>
  )
}

const NewsListPanel = styled.div`
  display : flex;
  flex-direction: column;
  height : 290px;
  font-size : 16px;
  padding-top : 20px;
  padding-left : 20px;
  padding-right : 20px;
  padding-bottom : 10px;
`

const NewsIcon = styled.div`
  color : white;
  font-size : 25px;
  display : flex;
  align-items: center;
  margin-bottom : 30px;
`

const AnnouncementIcon = styled(MdNewspaper)`
  font-size : 30px;
  margin-right : 30px;
`

const News = styled.button`
  background-color : transparent;
  border : 0px;
  color : #FFB266;
  text-align : left;
  padding : 0;
  width : 100%;
  overflow : hidden;
  text-overflow : ellipsis;
  white-space : nowrap;
  margin-bottom : 5px;

  &:hover{
    text-decoration: underline;  
  }
`

const ReadMoreButton = styled(Button)`
  background-color : black;
  border-radius : 25px;
  margin-top : 10px;
  border : 2px solid #343434;
  flex-direction: column;
`

export default NewsList
