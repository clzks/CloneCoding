import { MdForum } from "react-icons/md";
import styled from "styled-components";

const RecentDiscussionButton = () => {
  return (
    <StyledDiscussionButton>
      <StyledMdForum></StyledMdForum>
      <span>최근 토론</span>
    </StyledDiscussionButton>
  );
};

const StyledDiscussionButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const StyledMdForum = styled(MdForum)`
  color: white;
  font-size: 40px;
  margin-right: 10px;
`;

export default RecentDiscussionButton;
