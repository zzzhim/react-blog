import React, { Component, Fragment } from 'react'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd'

import style from './style.module.scss'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    componentDidMount() {
    }

    render() {
        const { username, password } = this.state
        return (
            <Fragment>
                <div className={ style.login }>
                    <section className={ style.section }>
                        <Form
                            labelAlign="left"
                            onSubmit={this.handleSubmit}
                            className="login-form">
                            <Form.Item
                                label="name"
                                >
                                <Input
                                    size="large"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    value={ username }
                                    onChange={ this.handleChangeUsername }
                                />
                            </Form.Item>
                            <Form.Item
                                label="password"
                                >
                                <Input
                                    size="large"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    value={ password }
                                    onChange={ this.handleChangePassword}
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
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }

    handleChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
}

export default Login