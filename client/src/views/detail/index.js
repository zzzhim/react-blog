/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-26 01:18:52
 * @LastEditTime: 2019-05-26 01:38:39
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import style from './style.module.scss'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { content } = this.props.location.state
        return (
            <div className={ style.container }>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        )
    }
}

export default Detail