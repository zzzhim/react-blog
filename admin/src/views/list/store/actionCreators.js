/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 00:50:44
 * @LastEditTime: 2019-05-21 01:18:57
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
                for(let item of data) {
                    item.key = item.id
                    item.tags = item.tags.split(',')
                    arr.push(item)
                }
                resolve(arr)
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
                        list: res,
                        current: params.current
                    }
                })
            })
    }
}