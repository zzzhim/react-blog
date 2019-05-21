import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Layout, Button, Icon } from 'antd'
import List from '../list'
import Release from '../release'
import Aside from './components/aside/index'
const { Header, Content, Footer, Sider } = Layout

class Layouts extends Component {
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
                        <Header style={{ background: '#fff' }}>Header</Header>
                        <Content>
                            <Route exact path="/layout/list" component={ List }></Route>
                            <Route exact path="/layout/release" component={ Release }></Route>
                        </Content>
                        <Footer />
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}

export default Layouts