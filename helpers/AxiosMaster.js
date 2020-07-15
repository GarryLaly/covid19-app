import axios from 'axios';

const URL = 'https://api.kawalcorona.com/';


export const api = axios.create({
    baseURL:URL,
    headers:{
        'Content-Type':'application/json'
    }
});