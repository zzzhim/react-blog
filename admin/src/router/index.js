/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-26 22:10:11
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import store from '../store'
import Layout from '../views/layout'
import Login from '../views/login'
import List from '../views/list'
import Release from '../views/release'
import Edit from '../views/edit'
import '../styles/reset.css'
import 'antd/dist/antd.css'

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from="/" to="/layout/list"></Redirect>
                        <Route exact path="/login" component={ Login }></Route>
                        <Route exact path="/layout/list" render={ props => (
                            <Layout>
                                <List { ...props } ></List>
                            </Layout>
                        ) } />
                        <Route exact path="/layout/release" render={ props => (
                            <Layout>
                                <Release { ...props } ></Release>
                            </Layout>
                        ) } />
                        <Route exact path="/layout/edit" render={ props => (
                            <Layout>
                                <Edit { ...props } ></Edit>
                            </Layout>
                        ) } />
                        <Route exact path="*" render={ props => (
                            <div>404</div>
                        ) } />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App