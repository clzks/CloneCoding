import styled from "styled-components";
import RecentItem from "./RecentItem";
import RecentChangeButton, {
  StyledMdSchedule,
} from "../common/RecentChangeButton";

const ItemList = [
  [
    "첫번째 문서 제목입니다. 일부러 길게해서 제대로 표시되는지 검사합니다.",
    "5초 전",
  ],
  [
    "두번째 문서 제목입니다. 일부러 길게해서 제대로 표시되는지 검사합니다.",
    "20분 전",
  ],
  [
    "세번째 문서 제목입니다. 일부러 길게해서 제대로 표시되는지 검사합니다.",
    "10분 전",
  ],
  [
    "4번째 문서 제목입니다. 일부러 길게해서 제대로 표시되는지 검사합니다.",
    "10분 전",
  ],
  [
    "5번째 문서 제목입니다. 일부러 길게해서 제대로 표시되는지 검사합니다.",
    "10분 전",
  ],
  ["6", "30분 전"],
  ["바보", "10분 전"],
  ["8", "10분 전"],
  ["으아아", "16분 전"],
  ["마지막", "1시간 전"],
];

const RecentChangePanel = () => {
  return (
    <StyledRecentChangePanel className="sideComponent">
      <RecentChangeButton
        iconSize="30px" // 원하는 크기로 지정
        fontSize="24px"
        marginRight="30px"
        marginBottom="15px"
      ></RecentChangeButton>
      {ItemList.map((item, index) => (
        <RecentItem key={index} title={item[0]} timeLine={item[1]}></RecentItem>
      ))}
    </StyledRecentChangePanel>
  );
};

const StyledRecentChangePanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  border-radius: 5px;
  font-size: 16px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;
const StyledRecentIcon = styled(RecentChangeButton).attrs({
  iconSize: "30px", // 원하는 크기로 지정
  fontSize: "24px",
  marginRight: "30px",
  marginBottom: "15px",
})``;

export default RecentChangePanel;
