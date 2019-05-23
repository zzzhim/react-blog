/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:33
 * @LastEditTime: 2019-05-21 23:10:24
 * @LastEditors: Please set LastEditors
 */

import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    id: '',
    title: '',
    tags: [],
    Introduction: '',
    content: ''
})

export default (state = defaultState, action) => {
    const { type } = action

    switch(type) {
        case constants.CHANGE_DETAILS:
            return state.merge({
                id: action.value.id,
                title: action.value.title,
                tags: action.value.tags,
                Introduction: action.value.introduction,
                content: action.value.content
            })
        case constants.CHANGE_TITLE:
            return state.set('title', action.value)
        case constants.CHANGE_TAGS:
            return state.merge({
                tags: state.get('tags').push(action.value)
            })
        case constants.CHANGE_INTRODUCTION:
            return state.set('Introduction', action.value)
        case constants.CHANGE_EDITOR:
            return state.set('content', action.value)
        case constants.WILL_UNMOUNT:
            return defaultState
        default:
            return state
    }
}