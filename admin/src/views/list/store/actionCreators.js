/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:44
 * @LastEditTime: 2019-05-22 23:44:38
 * @LastEditors: Please set LastEditors
 */
import { request } from '../../../utils'
import * as constants from './constants'
import { message } from 'antd';

const get_article_list = (params) => {
    return new Promise((resolve) => {
        request({
            url: '/get_article_list',
            params
        }).then(res => {
            const { data, status } = res.data

            if(status === 200) {
                const arr = []
                for(let item of data.list) {
                    item.key = item.id
                    item.tags = item.tags.split(',')
                    arr.push(item)
                }
                resolve({
                    list: arr,
                    total: data.total
                })
            }else {
                message.error(data)
            }
        }).catch(err => {
            console.log(err)
        })
    })
}

export const getArticleList = params => {
    return dispatch => {
        get_article_list(params)
            .then(res => {
                dispatch({
                    type: constants.GET_ARTICLE_LIST,
                    value: res
                })
            })
    }
}

export const handleChangePage = (params) => {
    return dispatch => {
        get_article_list(params)
            .then(res => {
                dispatch({
                    type: constants.CHANGE_PAGE,
                    value: {
                        data: res,
                        current: params.current
                    }
                })
            })
    }
}

export const handleRelease = (data) => {
    return dispatch => {
        request({
            url: '/is_show',
            method: 'post',
            data
        }).then(res => {
            const { status, data: value } = res.data
            if(status === 200) {
                dispatch({
                    type: constants.CHANGE_RELEASE,
                    value: {
                        ...value,
                        index: data.index
                    }
                })
                message.success(res.data.message)
            }else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }
}