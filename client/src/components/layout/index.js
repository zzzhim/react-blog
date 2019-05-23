/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-23 22:06:00
 * @LastEditTime: 2019-05-23 23:58:31
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, Fragment } from 'react'
import style from './style.module.scss'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className={ style.main }>
                    <div className={ style.container }>
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home