import React, {useState, useEffect} from 'react';
import {api} from './AxiosMaster';

export const getData = () => {
    const [numbers, setNumbers] = useState({});
    const status_patients_global = ['Confirmed','Recovered', 'Active', 'Deaths'];

    useEffect(async()=>{
        const fetchCovid=async()=> {
            var {data} = await api.get();
            confirm=data.reduce(function(sum, d){
                return sum + d.attributes.Confirmed
            },0)
            recovered=data.reduce(function(sum, d){
                return sum + d.attributes.Recovered
            },0)
            active=data.reduce(function(sum, d){ 
                return sum + d.attributes.Active
            },0)
            death=data.reduce(function(sum, d){ 
                return sum + d.attributes.Deaths
            },0)
            total_glob={confirm:confirm,recovered:recovered,active:active,death:death}

            var {data} = await api.get('indonesia');
            confirm=data.reduce(function(sum, d){
                return sum + parseInt(d.positif.replace(',',''))
            },0)
            recovered=data.reduce(function(sum, d){
                return sum + parseInt(d.sembuh.replace(',',''))
            },0)
            active=data.reduce(function(sum, d){ 
                return sum + parseInt(d.dirawat.replace(',',''))
            },0)
            death=data.reduce(function(sum, d){ 
                return sum + parseInt(d.meninggal.replace(',',''))
            },0)
            total_idn={confirm:confirm,recovered:recovered,active:active,death:death}
            total={indonesia:total_idn, global:total_glob}
            console.log(total.indonesia.active)
            setNumbers(total);
        };
        fetchCovid();
    },[]);

    return numbers;
}