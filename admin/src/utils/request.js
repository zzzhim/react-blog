/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 22:14:50
 * @LastEditTime: 2019-05-23 22:15:15
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios'
import Cookies from 'js-cookie'
import { tokenName } from '../config'
import { message } from 'antd'

const request = axios.create({
    // 请求地址前缀
    baseURL: 'http://localhost:8000/api/admin',
    // 请求超时
    timeout: 15000,
    // 请求头
    headers: {}
})

request.interceptors.request.use(
    config => {
        // 获取存储在cookie中的token
        const token = Cookies.get(tokenName)
        if(token !== undefined) {
            // 携带token
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
        // 当状态码为500时服务器报错，抛出错误
        if(response.data.code === 500) {
            message.error(response.data.message)
        }
        // 当状态码为401时为token过期，重新请求token
        if(response.data.code === 401) {
            message.error(response.data.message)
        }
        // 当状态码为403时为token未携带或为空，重新登陆
        if(response.data.code === 403) {
            message.error(response.data.message)
        }
        // 返回数据
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default request