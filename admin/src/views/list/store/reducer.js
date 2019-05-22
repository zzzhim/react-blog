/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:33
 * @LastEditTime: 2019-05-23 00:03:08
 * @LastEditors: Please set LastEditors
 */

import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    articleList: [],
    current: 1,
    pageSize: 10,
    total: 0
})

export default (state = defaultState, action) => {
    const { type } = action

    switch(type) {
        case constants.GET_ARTICLE_LIST:
            return state.merge({
                'articleList': action.value.list,
                'total': action.value.total,
            })
        case constants.CHANGE_PAGE:
            return state.merge({
                'current': action.value.current,
                'articleList': action.value.data.list,
                'total': action.value.data.total,
            })
        case constants.CHANGE_RELEASE:
            state.get('articleList')[action.value.index] = Object.assign(state.get('articleList')[action.value.index], { is_show: action.value.is_show })
            return state.set('articleList', [ ...state.get('articleList') ])
        default:
            return state
    }
}