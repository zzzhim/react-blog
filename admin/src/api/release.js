import { request } from '../utils'

export default (data) => {
    return new Promise((resolve, reject) => {
        return request({
            url: '/release',
            method: 'post',
            data
        }).then(res => {
            // resolve(res)
        }).catch(err => {
            // reject(err)
        })
    })
}