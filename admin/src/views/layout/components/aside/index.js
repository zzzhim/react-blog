import React, { Component, Fragment } from 'react'
// import { Route } from 'react-router-dom'
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
                        <Menu.Item key="list">列表</Menu.Item>
                        <Menu.Item key="release">发布文章</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="about">
                        <Icon type="pie-chart" />
                        <span>关于我</span>
                    </Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}

export default Aside