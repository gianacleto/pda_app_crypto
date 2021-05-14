import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.coincap.io'

});

export default api;