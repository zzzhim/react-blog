/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:33
 * @LastEditTime: 2019-05-21 01:10:30
 * @LastEditors: Please set LastEditors
 */

import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    title: '123',
    tags: [],
    Introduction: '',
    content: ''
})

export default (state = defaultState, action) => {
    const { type } = action

    switch(type) {
        case constants.CHANGE_TITLE:
            return state.set('title', action.value)
        default:
            return state
    }
}