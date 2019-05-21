import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import store from '../store'
import Layout from '../views/layout'
import Login from '../views/login'
import '../styles/reset.css'
import 'antd/dist/antd.css'

const redirect = (props) => {
    return (
        <Redirect to="/home" />
    )
}

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <Route exact path="/" component={ redirect }></Route>
                    <Route path="/layout" component={ Layout }></Route>
                    <Route exact path="/login" component={ Login }></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App