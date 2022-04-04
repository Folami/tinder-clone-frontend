import axios from 'axios';

const instance = axios.create({
    baseURL: '/tinder/cards',
});

export default instance;