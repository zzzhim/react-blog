/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:44
 * @LastEditTime: 2019-05-21 01:18:57
 * @LastEditors: Please set LastEditors
 */

import * as constants from './constants'
import { message } from 'antd'
import axios from 'axios'

const changeLogin = ({ token, username}) => ({
    type: constants.CHANGE_LOGIN,
    value: {
        token,
        username
    }
})

export const login = (username, password) => {
    return (dispatch) => {
        axios.post('http://localhost:8000/api/admin/login', {
            username,
            password
        })
            .then(res => {
                const { data, status } = res.data
                if(status === 200) {
                    dispatch(changeLogin(data))
                }else {
                    message.error(data)
                }
            })
            .catch(err => {
                message.success(err)
            })
    }
}