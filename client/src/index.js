/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-23 21:27:25
 * @LastEditTime: 2019-05-23 21:53:47
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/reset.css'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
