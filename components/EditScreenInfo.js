import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const GetStartedContainer = styled.View`
  align-items: center;
  margin-horizontal: 50px;
`;
const GetStartedText = styled.Text`
  font-size: 17px;
  line-height: 24px;
  text-align: center;
`;
const MonoText = styled.Text``;
const CodeHighlightContainer = styled.View`
  border-radius: 3px;
  padding-horizontal: 4px;
  margin-vertical: 7px;
`;
const HelpContainer = styled.View`
  margin-top: 15px;
  margin-horizontal: 20px;
  align-items: center;
`;
const HelpLink = styled.TouchableOpacity`
  padding-vertical: 15;
`;
const HelpLinkText = styled.Text`
  text-align: center;
`;

const EditScreenInfo = ({ path }) => {
  const handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
    );
  }

  return (
    <Container>
      <GetStartedContainer>
        <GetStartedText
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </GetStartedText>

        <CodeHighlightContainer
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </CodeHighlightContainer>

        <GetStartedText
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically update.
        </GetStartedText>
      </GetStartedContainer>

      <HelpContainer>
        <HelpLink onPress={() => handleHelpPress()}>
          <HelpLinkText>
            Tap here if your app doesn't automatically update after making changes
          </HelpLinkText>
        </HelpLink>
      </HelpContainer>
    </Container>
  );
}

export default EditScreenInfo;