/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 22:14:50
 * @LastEditTime: 2019-05-21 23:10:12
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, Fragment } from 'react'
import style from './style.module.scss'
import Editor from '../../components/tinymce'
import { Button, Form, Input, Tag, Icon, message } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import release from '../../api/release'

class Release extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            tag: ''
        }

        this.handleChangeTag = this.handleChangeTag.bind(this)
        this.handleChangeTags = this.handleChangeTags.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    render() {
        const { title, tags, Introduction, handleChangeTitle, handleChangeIntroduction, handleChangeEditor } = this.props
        const { tag } = this.state
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
                                tags.map((v, i) => {
                                    return (
                                        <Tag color="#1890ff" key={i}>
                                            { v }
                                            <Icon style={{ marginLeft: 5 }} type="close" />
                                        </Tag>
                                    )
                                })
                            }
                            <div style={{ display: 'inline-block' }}>
                                <Input value={ tag } onChange={ this.handleChangeTag } style={{ width: 100 }} size="large"/>
                                <Button
                                    style={{ marginLeft: '10px' }}
                                    size="large"
                                    type="primary"
                                    onClick={ () => this.handleChangeTags(this.state.tag) }
                                    >
                                    添加
                                </Button>
                            </div>
                        </Form.Item>
                        <Form.Item labelAlign="left" label="简介">
                            <Input.TextArea
                                value={ Introduction }
                                onChange={ handleChangeIntroduction }
                                autosize={{ minRows: 6, maxRows: 6 }}
                                style={{ width: '80%' }}
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ md: { span: 24 }, lg: { span: 24 } }}
                            wrapperCol={{ md: { span: 24 }, lg: { span: 24 } }}
                            labelAlign="left"
                            label="编辑">
                            {/* 富文本编辑器 */}
                            <Editor handleChange={ handleChangeEditor } />
                        </Form.Item>
                        <Form.Item>
                            <div className={ style.btn }>
                                <Button size="large" type="primary" onClick={ this.onSave }>保存</Button>
                                <Button size="large" style={{ marginLeft: '20px' }} htmlType="button">取消</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }

    componentWillUnmount() {
        this.props.handleWillUnmount()
    }

    handleChangeTag(e) {
        this.setState({
            tag: e.target.value
        })
    }

    handleChangeTags(value) {
        const tags  = this.props.tags

        if(!tags.includes(value) && tags.size < 5) {
            this.props.handleChangeTags(value)
        }else {
            message.error('标签已存在')
        }
    }

    onSave() {
        const { title, tags, Introduction, content } = this.props
        release({
            title,
            tags: tags.join(','),
            Introduction,
            content
        }).then(res => {
            this.props.history.push('/layout/list')
        })
    }
}

const mapState = state => ({
    title: state.getIn(['release', 'title']),
    tags: state.getIn(['release', 'tags']),
    Introduction: state.getIn(['release', 'Introduction']),
    content: state.getIn(['release', 'content'])
})

const mapDispatch = dispatch => ({
    handleChangeTitle(e) {
        dispatch(actionCreators.handleChangeTitle(e.target.value))
    },
    handleChangeTags(value) {
        dispatch(actionCreators.handleChangeTags(value))
    },
    handleChangeIntroduction(e) {
        dispatch(actionCreators.handleChangeIntroduction(e.target.value))
    },
    handleChangeEditor(content) {
        dispatch(actionCreators.handleChangeEditor(content))
    },
    handleWillUnmount() {
        dispatch(actionCreators.handleWillUnmount)
    }
})

export default connect(mapState, mapDispatch)(Release)