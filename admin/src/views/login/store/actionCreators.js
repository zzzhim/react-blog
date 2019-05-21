/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:44
 * @LastEditTime: 2019-05-21 01:18:57
 * @LastEditors: Please set LastEditors
 */

import * as constants from './constants'
import { message } from 'antd'
import { request } from '../../../utils'

const changeLogin = ({ token, username}) => ({
    type: constants.CHANGE_LOGIN,
    value: {
        token,
        username
    }
})

export const login = (username, password) => {
    return (dispatch) => {
        request({
            url: '/login',
            method: 'post',
            data: {
                username,
                password
            }
        }).then(res => {
            const { data, status } = res.data
            if(status === 200) {
                // 派发
                dispatch(changeLogin(data))
            }else {
                message.error(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}