import React, { Component, Fragment } from 'react'
import style from './style.module.scss'
import Editor from '../../components/tinymce'
import { Button } from 'antd'

class Release extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div className={ style.container }>
                    <Editor handleChange={ this.handleChange } />

                    <div className={ style.btn }>
                        <Button size="large" type="primary">保存</Button>
                        <Button size="large" style={{ marginLeft: '20px' }} htmlType="button">取消</Button>
                    </div>
                </div>
            </Fragment>
        )
    }

    handleChange(content) {
        this.setState({
            content
        })
    }
}

export default Release