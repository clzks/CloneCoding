import React from 'react'
import styled from 'styled-components'

const RecentItem = ({ title, timeLine }) => {
    return (
        <TitleWithTimeline>
            <RecentTitle>{title}</RecentTitle>
            <RecentTimeline>{timeLine}</RecentTimeline>
        </TitleWithTimeline>
    )
}

const TitleWithTimeline = styled.button`
  display: flex;
  background-color : transparent;
  border : 0px;
  padding : 0;
  width : 100%;
  margin-bottom : 5px;
`

const RecentTitle = styled.span`
  text-align : left;
  overflow : hidden;
  text-overflow : ellipsis;
  white-space : nowrap;
  flex : 1;
  //width : 70%;  flexBox에서는 width 보다 flex 값이 우선적으로 적용된다.
  color : #FFB266;

  &:hover{
    text-decoration: underline;     // 현재는 제목에 호버될때만 밑줄이지만 추후 useState를 통해서 타임라인에 호버여도 제목에 밑줄이 그어지게 고친다.
  }
`
const RecentTimeline = styled.span`
   margin-left: 10px;
  text-align : right;
  color : white;
`

export default RecentItem
