import { MdSchedule } from 'react-icons/md';
import styled from 'styled-components';

const RecentChangeButton = () => {
  return (
    <StyledChangeButton>
      <StyledMdSchedule></StyledMdSchedule>
      <span>최근 변경</span>
    </StyledChangeButton>
  )
}

const StyledChangeButton = styled.button`
  background-color : transparent;
  border: none;
  color : white;
`

const StyledMdSchedule = styled(MdSchedule)`
  color : white;
  font-size : 40px;
  margin-right : 10px;
`

export default RecentChangeButton;