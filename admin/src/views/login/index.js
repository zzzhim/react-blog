/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-21 01:09:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd'
import { actionCreators } from './store'

import style from './style.module.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { token } = this.props
        if(token.length === 0) {
            return (
                <Fragment>
                    <div className={ style.login }>
                        <section className={ style.section }>
                            <Form
                                labelAlign="left"
                                onSubmit={ (e) => this.handleSubmit(e, this.username, this.password)}
                                className="login-form">
                                <Form.Item
                                    label="name"
                                    >
                                    <Input
                                        size="large"
                                        defaultValue={ 'admin' }
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        ref={ input => { this.username = input } } 
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="password"
                                    >
                                    <Input
                                        size="large"
                                        defaultValue={ 'wangyafei1007' }
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        ref={ input => { this.password = input } }
                                    />
                                </Form.Item>
                                <Form.Item className={ style['login-btn'] }>
                                    <Button
                                        size="large"
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        >
                                        Login
                                    </Button>
                                </Form.Item>
                            </Form>
                        </section>
                    </div>
                </Fragment>
            )
        }else {
            return (
                <Redirect to="/home" />
            )
        }
    }

    handleSubmit(e, username, password) {
        e.preventDefault()
        this.props.login(username.state.value, password.state.value)
    }
}

const mapState = state => ({
    token: state.getIn(['login', 'token'])
})

const mapDispatch = dispatch => ({
    login(username, password) {
        dispatch(actionCreators.login(username, password))
    }
})

export default connect(mapState, mapDispatch)(Login)