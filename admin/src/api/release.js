import { request } from '../utils'
import { message } from 'antd';

export default (data) => {
    return new Promise((resolve, reject) => {
        return request({
            url: '/release',
            method: 'post',
            data
        }).then(res => {
            console.log(res)
            const { status, data } = res.data

            if(status === 200) {
                message.success(data)
                resolve(data)
            }else {
                message.error(data)
            }
        }).catch(err => {
            console.log(err)
        })
    })
}