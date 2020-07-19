import React, { useState } from "react";
import styled from "styled-components/native";
import StatisticDisplay from "../components/StatisticDisplay";
import StatisticCategoryBar from "../components/StatisticCategoryBar";

const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: #473f97;
`;

const RowContainer = styled.View`
  flex-direction: row;
  padding: 0 8px;
`;

const PageTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left: 16px;
`;

const TabTwoScreen = () => {
  const [activeStats, setActiveStats] = useState("country");

  return (
    <MainContainer>
      <PageTitle>Statistics</PageTitle>
      <StatisticCategoryBar
        activeCategory={activeStats}
        onChange={setActiveStats}
      />
      <RowContainer style={{ marginTop: 40 }}>
        <StatisticDisplay
          backgroundColor="#FFB259"
          title="Affected"
          value="336,851"
          isValueBig
        />
        <StatisticDisplay
          backgroundColor="#FF5959"
          title="Death"
          value="9,620"
          isValueBig
        />
      </RowContainer>
      <RowContainer>
        <StatisticDisplay
          backgroundColor="#4CD97B"
          title="Recovered"
          value="17,977"
        />
        <StatisticDisplay
          backgroundColor="#4DB5FF"
          title="Active"
          value="301,251"
        />
        <StatisticDisplay
          backgroundColor="#9059FF"
          title="Serious"
          value="8,702"
        />
      </RowContainer>
    </MainContainer>
  );
};

export default TabTwoScreen;
