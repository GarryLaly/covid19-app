import React from "react";
import styled from "styled-components/native";

import EditScreenInfo from "../components/EditScreenInfo";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const Separator = styled.Text`
  margin-vertical: 30px;
  height: 1px;
  width: 80%;
`;

const TabOneScreen = () => {
  return (
    <Container>
      <Title>Tab One</Title>
      {/* <Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
    </Container>
  );
};

export default TabOneScreen;
