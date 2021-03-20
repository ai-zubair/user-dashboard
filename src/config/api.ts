import axios from 'axios';

const reqres = axios.create({
  baseURL: 'https://reqres.in/api'
})

export { reqres };