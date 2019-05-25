/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-23 22:06:00
 * @LastEditTime: 2019-05-26 02:34:49
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, Fragment } from 'react'
// import { List, Avatar, Icon } from 'antd'
import { List, Tag } from 'antd'
import { request } from '../../utils'
import style from './style.module.scss'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            total: 0,
            pageSize: 5,
            current: 1
        }

        this.getArticleList = this.getArticleList.bind(this)
    }

    componentDidMount() {
        this.getArticleList()
    }

    render() {
        const { list, total, pageSize, current } = this.state

        return (
            <Fragment>
                <div style={{ width: 1300, backgroundColor: '#fff', padding: '20px 30px' }}>
                    <List
                        style={{ cursor: 'pointer' }}
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: async page => {
                                await this.setState((state, props) => ({
                                    current: page
                                }))
                                this.getArticleList()
                            },
                            current: current,
                            pageSize: pageSize,
                            total: total
                        }}
                        dataSource={list}
                        renderItem={item => (
                            <List.Item
                                onClick={
                                    () => (
                                        this.props.history.push({
                                            key: '',
                                            pathname: '/detail',
                                            search: '',
                                            hash: '',
                                            state: {
                                                content: item.content
                                            }
                                        })
                                    )
                                }
                                key={item.id}
                                actions={
                                    item.tags.split(',').map((v, i) => {
                                        return (
                                            <Tag key={i} style={{ marginRight: '10px' }} color="#87d068">{v}</Tag>
                                        )
                                    })
                                }
                            >
                                <List.Item.Meta
                                    title={<div>{item.title}</div>}
                                    description={
                                        <div className={ style.ellipsis }>{item.introduction}</div>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </Fragment>
        )
    }

    getArticleList() {
        const { pageSize, current } = this.state

        request({
            url: '/get_article_list',
            params: {
                current,
                pageSize
            }
        }).then(res => {
            console.log(res)
            this.setState({
                list: res.data.data.list,
                total: res.data.data.total
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

export default Home