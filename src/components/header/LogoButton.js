import LogoText from '../../assets/images/logo.svg';
import styled from 'styled-components';

const LogoButton = () => {

  return (
    <div>
      <StyeldLogoButton>
        <img src={LogoText} alt="Logo" width={"150px"}></img>
      </StyeldLogoButton>{''}
    </div>
  );
}

const StyeldLogoButton = styled.button`   // 기본 html 태그에 접근할떄는 . , 리액트 컴포넌트에 접근할때는 () 괄호 안에
  background-color : transparent;
  border: none;
`

export default LogoButton;