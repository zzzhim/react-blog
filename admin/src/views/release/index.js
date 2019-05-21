import React, { Component, Fragment } from 'react'
import style from './style.module.scss'
import Editor from '../../components/tinymce'
import { Button, Form, Input, Tag, Icon } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Release extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        const { title, handleChangeTitle } = this.props
        return (
            <Fragment>
                <div className={ style.container }>
                    <Form
                        labelCol={{ md: { span: 24 }, lg: { span: 1 } }}
                        wrapperCol={{ md: { span: 24 }, lg: { span: 23 } }}
                        >
                        <Form.Item labelAlign="left" label="标题">
                            <Input style={{ width: 300 }} size="large" value={ title } onChange={ handleChangeTitle }/>
                        </Form.Item>
                        <Form.Item labelAlign="left" label="标签">
                            {
                                [1,2,3,4,5].map((v, i) => {
                                    return (
                                        <Tag color="#1890ff" key={i}>
                                            magenta
                                            <Icon style={{ marginLeft: 5 }} type="close" />
                                        </Tag>
                                    )
                                })
                            }
                            <div style={{ display: 'inline-block' }}>
                                <Input style={{ width: 100 }} size="large"/>
                                <Button
                                    style={{ marginLeft: '10px' }}
                                    size="large"
                                    type="primary"
                                    >
                                    添加
                                </Button>
                            </div>
                        </Form.Item>
                        <Form.Item labelAlign="left" label="简介">
                            <Input.TextArea autosize={{ minRows: 6, maxRows: 6 }} style={{ width: '80%' }} size="large"/>
                        </Form.Item>
                        <Form.Item
                            labelCol={{ md: { span: 24 }, lg: { span: 24 } }}
                            wrapperCol={{ md: { span: 24 }, lg: { span: 24 } }}
                            labelAlign="left"
                            label="编辑">
                            {/* 富文本编辑器 */}
                            <Editor handleChange={ this.handleChange } />
                        </Form.Item>
                        <Form.Item>
                            <div className={ style.btn }>
                                <Button size="large" type="primary">保存</Button>
                                <Button size="large" style={{ marginLeft: '20px' }} htmlType="button">取消</Button>
                            </div>
                        </Form.Item>
                    </Form>
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

const mapState = state => ({
    title: state.getIn(['release', 'title'])
})

const mapDispatch = dispatch => ({
    handleChangeTitle(e) {
        dispatch(actionCreators.handleChangeTitle(e.target.value))
    }
})

export default connect(mapState, mapDispatch)(Release)