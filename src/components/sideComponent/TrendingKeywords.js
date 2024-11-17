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
        실시간검색어
      </TrendingKeywordsPanel>
  );
};

const TrendingKeywordsPanel = styled.div`
  height: 45px;
  text-align: left;
  padding-left: 20px;
  position : absolute;
  display: flex;
  align-items: center;

  &:hover {
    align-items: normal;
    height : 400px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

export default TrendingKeywords;
