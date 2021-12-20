import axios from "axios";

const instance = axios.create({
    baseURL: 'https://webdogo.herokuapp.com/api/',
    headers: { 'Content-Type': 'application/json' },
})


export default instance;