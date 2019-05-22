/* eslint-disable no-script-url */
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Divider, Tag, Button } from 'antd'
import style from './style.module.scss'
import { actionCreators } from './store'

class List extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const { current, pageSize, getArticleList } = this.props
        getArticleList({
            current,
            pageSize
        })
    }

    render() {
        const { current, pageSize, list, total, handleChangePage } = this.props

        const columns = [
            {
                title: 'id',
                dataIndex: 'key',
                key: 'key',
                align: 'center'
            },
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
                align: 'center',
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                render: title => <a href="javascript:;">{title}</a>,
            },
            {
                title: '简介',
                dataIndex: 'introduction',
                align: 'center',
                key: 'introduction',
            },
            {
                title: '标签',
                key: 'tags',
                dataIndex: 'tags',
                align: 'center',
                render: tags => (
                    <span>
                        {
                            tags.map((tag) => {
                                return (
                                    <Tag color={ '#1890ff' } key={ tag }>
                                        {tag.toUpperCase()}
                                    </Tag>
                                )
                            })
                        }
                    </span>
                ),
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
                align: 'center',
                key: 'create_time',
                sorter: (a, b) => a.age - b.age
            },
            {
                title: '最近更新',
                dataIndex: 'update_time',
                align: 'center',
                key: 'update_time',
                sorter: (a, b) => a.age - b.age
            },
            {
                title: '发布',
                dataIndex: 'is_show',
                align: 'center',
                key: 'is_show',
                render: is_show => (
                    <span>
                        { parseInt(is_show) === 1 ? '已发布' : '未发布' }
                    </span>
                )
            },
            {
                title: '操作',
                align: 'center',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button type="primary">发布</Button>
                        <Divider type="vertical" />
                        <Button type="primary">编辑</Button>
                        <Divider type="vertical" />
                        <Button type="danger">删除</Button>
                    </span>
                ),
            },
        ]

        const pagination = {
            position: 'bottom',
            pageSize,
            current,
            total,
            onChange: handleChangePage
        }

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
              disabled: record.name === 'Disabled User', // Column configuration not to be checked
              name: record.name,
            }),
        };

        return (
            <Fragment>
                <div className={style.container}>
                    <div className={style.table}>
                        <Table
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={[...list]}
                            pagination={pagination}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapState = state => ({
    list: state.getIn(['articleList', 'articleList']),
    current: state.getIn(['articleList', 'current']),
    pageSize: state.getIn(['articleList', 'pageSize']),
    total: state.getIn(['articleList', 'total'])
})

const mapDispatch = dispatch => ({
    getArticleList(params) {
        dispatch(actionCreators.getArticleList(params))
    },
    handleChangePage(page, pageSize) {
        dispatch(actionCreators.handleChangePage({
            current: page,
            pageSize
        }))
    }
})

export default connect(mapState, mapDispatch)(List)