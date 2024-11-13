import { MdArrowRightAlt } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { useState } from 'react';

const SearchBox = () => {

  const [isFocus, setIsFocus] = useState(false);

  return (
    <StyledSearchBox isFocus={isFocus}>
      <StyledInput
        placeholder="여기에서 검색" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>
      </StyledInput>
      <StyledSearchIcon></StyledSearchIcon>
      <StyledArrowRightIcon></StyledArrowRightIcon>
    </StyledSearchBox >
  );
}

const StyledSearchBox = styled.div`
  border : 2px solid transparent;
  display :flex;
  align-items : stretch;
  background-color : black;
  border-radius : 5px;
  ${({ isFocus }) => isFocus && `border-color: #e0e1dd;`} // 조건부 논리 평가. 삼항 연산자와는 다르다!

`;

const StyledInput = styled.input`
  padding-left : 20px;
  background-color : black;
  color : white;
  height : 50px;
  outline: none;
  box-shadow: none;
  border : none;
  border-radius : 10px;
  &::placeholder {
    color: #e0e1dd;
    font-size: 18px;
  }
`;

const StyledSearchIcon = styled(MdSearch)`
  height : 50px;
  font-size : 25px;
  transform: translateX(10px);
`;

const StyledArrowRightIcon = styled(MdArrowRightAlt)`
  height : 50px;
  font-size : 25px;
  transform: translateX(30px);
`;
export default SearchBox;