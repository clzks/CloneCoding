import styled from "styled-components"

const TrendingKeywords = () => {
    return (
        <TrendingKeywordsPanel className="sideComponent">
            <SmallRankPanel>ddd</SmallRankPanel>
        </TrendingKeywordsPanel>
    )
}

const TrendingKeywordsPanel = styled.div`
  height : 50px;
  border-radius : 10px;
  margin-bottom : 20px;
`

const SmallRankPanel = styled.div`
   text-align : left;
   padding-left : 20px;
   margin-top : 7px;
`

const FullRankPanel = styled.div`       // 실시간 검색어 반응형

`

export default TrendingKeywords
