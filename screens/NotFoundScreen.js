import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const Link = styled.TouchableOpacity`
  margin-top: 15px;
  padding-vertical: 15px;
`;
const LinkText = styled.Text`
  font-size: 14px;
  color: #2e78b7;
`;

const NotFoundScreen = ({navigation}) => {
  return (
    <Container>
      <Title>This screen doesn't exist.</Title>
      <Link onPress={() => navigation.replace('Root')}>
        <LinkText>Go to home screen!</LinkText>
      </Link>
    </Container>
  );
}

export default NotFoundScreen;