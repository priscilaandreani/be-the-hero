import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.13:19000:3333'
})

export default api;