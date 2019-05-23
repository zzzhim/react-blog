/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:44
 * @LastEditTime: 2019-05-21 22:43:28
 * @LastEditors: Please set LastEditors
 */

import * as constants from './constants'

export const getArticleDetails = details => {
    return dispatch => {
        dispatch({
            type: constants.CHANGE_DETAILS,
            value: details
        })
    }
}

const changeTitle = value => ({
    type: constants.CHANGE_TITLE,
    value
})

export const handleChangeTitle = value => {
    return dispatch => {
        dispatch(changeTitle(value))
    }
}

const changeTags = value => ({
    type: constants.CHANGE_TAGS,
    value
})

export const handleChangeTags = value => {
    return dispatch => {
        dispatch(changeTags(value))
    }
}

const Introduction = value => ({
    type: constants.CHANGE_INTRODUCTION,
    value
})

export const handleChangeIntroduction = value => {
    return dispatch => {
        dispatch(Introduction(value))
    }
}

const Editor = content => ({
    type: constants.CHANGE_EDITOR,
    value: content
})

export const handleChangeEditor = content => {
    return dispatch => {
        dispatch(Editor(content))
    }
}

export const handleWillUnmount = {
    type: constants.WILL_UNMOUNT
}