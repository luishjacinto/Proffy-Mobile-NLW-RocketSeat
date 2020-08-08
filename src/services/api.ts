import axios from 'axios'

const api = axios.create({
    baseURL: 'https://proffy06082020.herokuapp.com/'
    // baseURL: 'http://192.168.2.110:5000'
})

export default api