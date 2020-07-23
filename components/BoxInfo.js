import React from 'react';
import styled from 'styled-components/native';

const Info = styled.View`
    border: 1px solid ${props => props.color};
    border-radius: 6px;
    background-color: ${props => props.color};
    padding: 10px;
`;

const InfoTitle = styled.Text`
    color: #fff;
`;

const InfoNumbers = styled.Text`
    color: #fff;
    font-size: 24;
`;

const BoxInfo = (patients) => {
    return (
        <Info color={patients.boxColor}>
            <InfoTitle>{patients.title}</InfoTitle>
            <InfoNumbers>{patients.data}</InfoNumbers>
        </Info>
    );
}
export default BoxInfo;