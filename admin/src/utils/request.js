import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8000/api/admin',
    timeout: 15000,
    headers: {}
})

request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default request