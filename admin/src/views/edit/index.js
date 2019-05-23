import React, { PureComponent, Fragment } from 'react'
import style from './style.module.scss'
import Editor from '../../components/tinymce'
import { Button, Form, Input, Tag, Icon, message } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { request } from '../../utils'

class Release extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            tag: '',
            loading: false
        }

        this.handleChangeTag = this.handleChangeTag.bind(this)
        this.handleChangeTags = this.handleChangeTags.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    componentDidMount() {
        const { details } = this.props.location.state
        this.props.getArticleDetails(details)
    }

    render() {
        const { title, tags, Introduction, content, handleChangeTitle, handleChangeIntroduction, handleChangeEditor, handleChangeDeleteTag } = this.props
        const { tag, loading } = this.state
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
                                            <Icon onClick={ () => handleChangeDeleteTag(tags, i) } style={{ marginLeft: 5 }} type="close" />
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
                            <Editor initialValue={ content } handleChange={ handleChangeEditor } />
                        </Form.Item>
                        <Form.Item>
                            <div className={ style.btn }>
                                <Button size="large" type="primary" loading={ loading } onClick={ this.onSave }>保存</Button>
                                <Button size="large" style={{ marginLeft: '20px' }} htmlType="button" onClick={ () => this.props.history.push('/layout/list') }>取消</Button>
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
        console.log(tags)

        if(!tags.includes(value) && tags.size < 5) {
            this.props.handleChangeTags(value)
        }else {
            message.error('标签已存在')
        }
    }

    onSave() {
        const { id, title, tags, Introduction, content } = this.props
        const data = { id, title, tags: tags.join(','), Introduction, content }
        this.setState({
            loading: true
        })
        request({
            url: '/update_article',
            method: 'post',
            data
        }).then(res => {
            const { status, message: messages } = res.data
            if(status === 200) {
                message.success(messages)
                this.setState({
                    loading: false
                })
                this.props.history.push('/layout/list')
            }else {
                this.setState({
                    loading: false
                })
                message.error(messages)
            }
        }).catch(err => {
            console.log(err)
            this.setState({
                loading: false
            })
        })
    }
}

const mapState = state => ({
    id: state.getIn(['articleEdit', 'id']),
    title: state.getIn(['articleEdit', 'title']),
    tags: state.getIn(['articleEdit', 'tags']),
    Introduction: state.getIn(['articleEdit', 'Introduction']),
    content: state.getIn(['articleEdit', 'content'])
})

const mapDispatch = dispatch => ({
    getArticleDetails(details) {
        dispatch(actionCreators.getArticleDetails(details))
    },
    handleChangeTitle(e) {
        dispatch(actionCreators.handleChangeTitle(e.target.value))
    },
    handleChangeTags(value) {
        dispatch(actionCreators.handleChangeTags(value))
    },
    handleChangeDeleteTag(tags, index) {
        dispatch(actionCreators.handleChangeDeleteTag(tags, index))
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