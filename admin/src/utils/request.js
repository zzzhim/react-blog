/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 22:14:50
 * @LastEditTime: 2019-05-22 20:58:32
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import Cookies from 'js-cookie'
import { tokenName } from '../config'
import { message } from 'antd'

const request = axios.create({
    baseURL: 'http://localhost:8000/api/admin',
    timeout: 15000,
    headers: {}
})

request.interceptors.request.use(
    config => {
        const token = Cookies.get(tokenName)
        if(token !== undefined) {
            config.headers['X-Token'] = token
        }else {
            config.headers['X-Token'] = JSON.stringify({token: '', username: ''})
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    response => {
        if(response.data.code === 500) {
            message.error(response.data.message)
        }

        if(response.data.code === 401) {
            message.error(response.data.message)
        }

        if(response.data.code === 403) {
            message.error(response.data.message)
        }

        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default request