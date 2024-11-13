import { MdPerson } from 'react-icons/md';
import styled from 'styled-components';


const ProfileButton = () => {
    return (
        <StyledProfileButton>
            <MdPerson></MdPerson>
        </StyledProfileButton>
    )
}

const StyledProfileButton = styled.button`
   background-color : transparent;
  color : #dad7cd;
  font-size : 40px;
  width : 50px;
  height : 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius : 10px;
  border : none;
  margin-left : 20px;
`;

export default ProfileButton;