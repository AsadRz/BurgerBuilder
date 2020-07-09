import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-a4e40.firebaseio.com/',
});

export default instance;
