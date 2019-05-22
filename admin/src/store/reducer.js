/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-21 00:53:26
 * @LastEditors: Please set LastEditors
 */

import { combineReducers } from 'redux-immutable'
import { reducer as loginReducer }  from '../views/login/store'
import { reducer as releaseReducer }  from '../views/release/store'
import { reducer as articleListReducer }  from '../views/list/store'

// 生成一个不可更改对象
const reducer = combineReducers({
    login: loginReducer,
    release: releaseReducer,
    articleList: articleListReducer
})

export default reducer