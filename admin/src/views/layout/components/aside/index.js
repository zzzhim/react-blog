/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 22:14:50
 * @LastEditTime: 2019-05-23 18:31:07
 * @LastEditors: Please set LastEditors
 */
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { createBrowserHistory  } from 'history'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class Aside extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const history = createBrowserHistory()

        return (
            <Fragment>
                <Menu
                    style={{ minHeight: 'calc(100vh - 64px)' }}
                    defaultSelectedKeys={[history.location.pathname]}
                    defaultOpenKeys={['article']}
                    mode="inline"
                    >
                    {/* <Menu.Item key="tag">
                        <Icon type="pie-chart" />
                        <span>标签</span>
                    </Menu.Item> */}
                    <SubMenu
                        key="article"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>文章列表</span>
                            </span>
                        }
                        >
                        <Menu.Item key="/layout/list">
                            <Link
                                to={{
                                    pathname: "/layout/list",
                                    search: "",
                                    hash: "",
                                    state: { name: '文章列表' }
                                }}
                                >
                                列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/layout/release">
                            <Link
                                to={{
                                    pathname: "/layout/release",
                                    search: "",
                                    hash: "",
                                    state: { name: '发布文章' }
                                }}
                                >
                                添加文章
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/layout/about">
                        <Link
                            to={{
                                pathname: "/layout/about",
                                search: "",
                                hash: "",
                                state: { name: '关于我' }
                            }}
                            >
                            <Icon type="pie-chart" />
                            <span>关于我</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}

export default Aside