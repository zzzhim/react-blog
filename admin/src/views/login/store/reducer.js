/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:33
 * @LastEditTime: 2019-05-21 01:10:30
 * @LastEditors: Please set LastEditors
 */

import { fromJS } from 'immutable'
import * as constants from './constants'
import Cookies from 'js-cookie'
import { tokenName } from '../../../config'

const getToken = (() => {
    const name = Cookies.get(tokenName)
    return name !== undefined ? JSON.parse(name) : { token: '', username: '' }
})()

const setToken = ({ token, username }) => {
    Cookies.set(
        tokenName,
        JSON.stringify({
            token: token || '',
            username: username || ''
        }),
        { expires: 7 }
    )
}

const defaultState = fromJS({
    token: getToken.token,
    username: getToken.username
})

export default (state = defaultState, action) => {
    const { type } = action

    switch(type) {
        case constants.CHANGE_LOGIN:
            setToken(action.value)
            return state.set('token', action.value.token).set('username', action.value.username)
        default:
            return state
    }
}