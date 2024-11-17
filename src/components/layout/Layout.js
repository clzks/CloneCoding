import HeaderContainer from "../header/HeaderContainer";
import Footer from "../footer/Footer";
import styled from "styled-components";
import MainContainer from "../main/MainContainer";
import SideComponent from "../sideComponent/SideComponent";

const Layout = () => (
  <StyleLayout>
    <HeaderContainer></HeaderContainer>
    <ContentWrapper>
      <MainContainer></MainContainer>
      <SideComponent></SideComponent>
    </ContentWrapper>
    <Footer></Footer>
  </StyleLayout>
);

const StyleLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 120vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center; // 중앙 정렬을 위한 설정
  padding: 20px;
  flex: 1; /* 부모 요소의 남은 공간을 차지하도록 설정 */
`;

export default Layout;
