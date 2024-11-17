import React from 'react'
import TrendingKeywords from './TrendingKeywords'
import RecentChangePanel from './RecentChangePanel'
import NewsList from './NewsList'
import styled from 'styled-components'

const SideComponent = () => {
  return (
    <SideWrapper >
      <TrendingKeywords></TrendingKeywords>
      <RecentChangePanel></RecentChangePanel>
      <NewsList></NewsList>
    </SideWrapper>
  )
}



const SideWrapper = styled.div`
    position : relative;
    width: 300px; // 사이드 패널의 폭
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px; // 메인 컨테이너와의 간격
`


export default SideComponent