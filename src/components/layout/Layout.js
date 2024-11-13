import HeaderContainer from "../header/HeaderContainer";
import Footer from "../footer/Footer";
import styled from 'styled-components';
import MainContainer from "../main/MainContainer";
import NewsList from "../sideComponent/NewsList";
import RecentChangePanel from "../sideComponent/RecentChangePanel";
import TrendingKeywords from "../sideComponent/TrendingKeywords";

const Layout = () => (
  <StyleLayout>
    <HeaderContainer></HeaderContainer>
    <ContentWrapper>
      <MainContainer>

      </MainContainer>
      <SideWrapper>
        <TrendingKeywords></TrendingKeywords>
        <RecentChangePanel></RecentChangePanel>
        <NewsList></NewsList>
      </SideWrapper>
    </ContentWrapper>
    <Footer></Footer>
  </StyleLayout>
)

const StyleLayout = styled.div`
  display : flex;
  flex-direction : column;
  min-height : 120vh;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center; // 중앙 정렬을 위한 설정
  padding: 20px;
  flex: 1; /* 부모 요소의 남은 공간을 차지하도록 설정 */
`

const SideWrapper = styled.div`
   width: 300px; // 사이드 패널의 폭
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px; // 메인 컨테이너와의 간격
`

export default Layout;