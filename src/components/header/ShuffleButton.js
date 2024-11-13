import { MdShuffle } from 'react-icons/md';
import styled from 'styled-components';

const ShuffleButton = () => {
    return (
        <StyledMdShuffle>
            <MdShuffle></MdShuffle>
        </StyledMdShuffle>
    )
}

const StyledMdShuffle = styled.button`
  background-color : black;
  color : #dad7cd;
  font-size : 30px;
  width : 50px;
  height : 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius : 10px;
  border : none;
`

export default ShuffleButton;