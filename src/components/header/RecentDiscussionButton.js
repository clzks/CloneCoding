import { MdForum } from 'react-icons/md';
import styled from 'styled-components';

const RecentDiscussionButton = () => {
  return (
    <StyledDiscussionButton>
      <StyledMdForum></StyledMdForum>
      <span>최근 변경</span>
    </StyledDiscussionButton>
  )
}

const StyledDiscussionButton = styled.button`
  background-color : transparent;
  border: none;
  color : white;
`

const StyledMdForum = styled(MdForum)`
  color : white;
  font-size : 40px;
  margin-right : 10px;
`

export default RecentDiscussionButton;