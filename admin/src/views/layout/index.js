/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-21 22:14:50
 * @LastEditTime: 2019-05-26 22:12:00
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, Fragment } from 'react'
import { Layout, Button, Icon } from 'antd'
import Aside from './components/aside/index'
const { Header, Content, Footer, Sider } = Layout

class Layouts extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { collapsed: false }
        this.toggleCollapsed = this.toggleCollapsed.bind(this)
    }

    toggleCollapsed() {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        return (
            <Fragment>
                <Layout>
                    <Sider theme="light" collapsed={ this.state.collapsed }>
                        <div style={{ height: '64px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Button type="primary" onClick={this.toggleCollapsed}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button>
                        </div>
                        <Aside />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff' }}>
                        </Header>
                        <Content>
                            { this.props.children }
                        </Content>
                        <Footer />
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

export default Layouts