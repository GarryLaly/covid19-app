import React, {useState, useEffect} from 'react';
import {api} from './AxiosMaster';

export const getData = (nation, isCall) => {
    const [numbers, setNumbers] = useState({});
    const status_patients_global = ['Confirmed','Recovered', 'Active', 'Deaths'];

    useEffect(async()=>{
        const fetchCovid=async()=> {
            const {data} = await api.get(nation);
            
            confirm=data.reduce(function(sum, d){
                return sum + (nation!='indonesia' ? d.attributes.Confirmed : parseInt(d.positif.replace(',','')))
                // return sum + parseInt(d.positif.replace(',',''))
            },0)
            recovered=data.reduce(function(sum, d){
                return sum + (nation!='indonesia' ? d.attributes.Recovered : parseInt(d.sembuh.replace(',','')))
                // return sum + parseInt(d.sembuh.replace(',',''))
            },0)
            active=data.reduce(function(sum, d){ 
                return sum + ( nation!='indonesia' ? d.attributes.Active : parseInt(d.dirawat.replace(',','')))
                // return sum + parseInt(d.dirawat.replace(',',''))
            },0)
            death=data.reduce(function(sum, d){ 
                return sum + (nation!='indonesia' ? d.attributes.Deaths : parseInt(d.meninggal.replace(',','')))
                // return sum + parseInt(d.meninggal.replace(',',''))
            },0)
            // status_patients_global.map( status => {
            //     data.reduce(function(sum, d){
            //         return sum+d.attributes[status]
            //     })
            // })

            total={confirm:confirm,recovered:recovered,active:active,death:death}
        
            setNumbers(total);
        };
        fetchCovid();
    },[]);

    return numbers;
}