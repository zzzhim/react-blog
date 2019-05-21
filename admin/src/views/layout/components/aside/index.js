import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class Aside extends Component {
    render() {
        return (
            <Fragment>
                <Menu
                    style={{ minHeight: 'calc(100vh - 64px)' }}
                    defaultSelectedKeys={[]}
                    defaultOpenKeys={['article']}
                    mode="inline"
                    >
                    <Menu.Item key="tag">
                        <Icon type="pie-chart" />
                        <span>标签</span>
                    </Menu.Item>
                    <SubMenu
                        key="article"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>文章列表</span>
                            </span>
                        }
                        >
                        <Menu.Item key="list">
                            <Link
                                to={{
                                    pathname: "/layout/list",
                                    search: "",
                                    hash: "",
                                    state: { fromDashboard: true }
                                }}
                                >
                                列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="release">
                            <Link
                                to={{
                                    pathname: "/layout/release",
                                    search: "",
                                    hash: "",
                                    state: { fromDashboard: true }
                                }}
                                >
                                发布文章
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="about">
                        <Link
                            to={{
                                pathname: "/layout/about",
                                search: "",
                                hash: "",
                                state: { fromDashboard: true }
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