import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';

import EditScreenInfo from '../components/EditScreenInfo';
import BoxInfo from '../components/BoxInfo';

import {getData} from '../helpers/FetchStats';
import { api } from '../helpers/AxiosMaster';

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

const Row = styled.View`
    flex-direction: row;
    margin-bottom:10px;
`;

const Col = styled.View`
    flex: ${(props) => props.size};
    align-items:center;
`;

const Tulis = styled.Text``;

const TabTwoScreen = () => {
  const [numbers, setNumbers] = useState({});
  const [toggle, setToggle] = useState({status:false, nation:'Indonesia'});

  useEffect( ()=>{
    const fetchCovid=async(is_global)=> {
        const {data} = await api.get((is_global?'':'indonesia'));
        confirm=data.reduce(function(sum, d){
            return sum + (is_global?d.attributes.Confirmed:parseInt(d.positif.replace(',','')))
        },0)
        recovered=data.reduce(function(sum, d){
            return sum + (is_global?d.attributes.Recovered:parseInt(d.sembuh.replace(',','')))
        },0)
        active=data.reduce(function(sum, d){ 
            return sum + (is_global?d.attributes.Active:parseInt(d.dirawat.replace(',','')))
        },0)
        death=data.reduce(function(sum, d){ 
            return sum + (is_global?d.attributes.Deaths:parseInt(d.meninggal.replace(',','')))
        },0)

        total = {confirm:confirm,recovered:recovered,active:active,death:death}
        setNumbers(total);
    };

    fetchCovid(toggle.status);
  },[toggle]);

  return (
    <Container>
      <Title>{ toggle.nation }</Title>
      <Switch
          trackColor={{false: 'red', true: 'blue'}}
          thumbColor="white"
          ios_backgroundColor="gray"
          onValueChange={(value) => { setToggle({ status: value,nation: value?'Global':'Indonesia' });  } }
          value={toggle.status}
        />
      <Separator lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.js" /> */}

      <Row>
        <Col size={1}>
          {/* <Tulis>{numbers.confirm}</Tulis> */}
          <BoxInfo data={numbers.confirm} boxColor="#DC8700" title="Confirm"></BoxInfo>
        </Col>
        <Col size={1}>
          <BoxInfo data={numbers.death} boxColor="#f00" title="Death"></BoxInfo>
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <BoxInfo data={numbers.recovered} boxColor="#40BA1C" title="Recovered"></BoxInfo>
        </Col>
        <Col size={1}>
          <BoxInfo data={numbers.active} boxColor="#1D9FC4" title="Active"></BoxInfo>
        </Col>
      </Row>
    </Container>
  );
}

export default TabTwoScreen;