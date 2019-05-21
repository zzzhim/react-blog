/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:44
 * @LastEditTime: 2019-05-21 01:18:57
 * @LastEditors: Please set LastEditors
 */

import * as constants from './constants'

const changeTitle = (value) => ({
    type: constants.CHANGE_TITLE,
    value
})


export const handleChangeTitle = (value) => {
    return dispatch => {
        dispatch(changeTitle(value))
    }
}