/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-23 22:06:00
 * @LastEditTime: 2019-05-23 23:43:21
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, Fragment } from 'react'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <div>
                    11
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Home