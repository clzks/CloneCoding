import { MdSchedule } from 'react-icons/md';
import styled from 'styled-components';

const RecentChangeButton = ({ iconSize = "40px", iconColor = "white", fontSize = "20px", marginRight = "10px", marginBottom = "0px" }) => {
  return (
    <StyledChangeButton fontSize={fontSize} marginBottom={marginBottom}>
      <StyledMdSchedule iconSize={iconSize} iconColor={iconColor} marginRight={marginRight}></StyledMdSchedule>
      <span>최근 변경</span>
    </StyledChangeButton>
  )
}

const StyledChangeButton = styled.button`
  display :flex;
  align-items : center;
  background-color : transparent;
  border: none;
  color : white;
  font-size : ${(props) => props.fontSize};
  margin-bottom : ${(props) => props.marginBottom};
`

export const StyledMdSchedule = styled(MdSchedule)`
  color : ${(props) => props.iconColor};
  font-size : ${(props) => props.iconSize};
  margin-right : ${(props) => props.marginRight};
`

export default RecentChangeButton;