/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-23 21:27:25
 * @LastEditTime: 2019-05-26 01:27:30
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import  Layout from './components/layout'
import Home from './views/home'
import Detail from './views/detail'

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Redirect exact from="/" to="/home"></Redirect>
                    <Route exact path="/home" render={
                            props  => (
                                <Layout>
                                    <Home { ...props  }></Home>
                                </Layout>
                            )
                        }>
                    </Route>
                    <Route exact path="/detail" render={
                            props  => (
                                <Layout>
                                    <Detail { ...props  }></Detail>
                                </Layout>
                            )
                        }>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App