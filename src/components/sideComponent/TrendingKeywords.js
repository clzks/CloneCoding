import styled from "styled-components";
import React, { useState } from "react";

const TrendingKeywords = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <TrendingKeywordsPanel
      className="sideComponent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <FullRankPanel>ddd</FullRankPanel>
      ) : (
        <SmallRankPanel>ddd</SmallRankPanel>
      )}
    </TrendingKeywordsPanel>
  );
};

const TrendingKeywordsPanel = styled.div`
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SmallRankPanel = styled.div`
  text-align: left;
  padding-left: 20px;
  margin-top: 10px;
`;

const FullRankPanel = styled.div`
  // 실시간 검색어 반응형
`;

export default TrendingKeywords;
