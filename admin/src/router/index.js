import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import store from '../store'
import Home from '../views/home'

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
                    <Route exact path="/home" component={ Home }></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App