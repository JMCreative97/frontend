import axios from 'axios';

console.log("Token " + sessionStorage.getItem('token'));
const authAxios = axios.create({
    headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
});

export default authAxios;

