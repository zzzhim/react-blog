/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-23 18:30:11
 * @LastEditTime: 2019-05-26 01:58:52
 * @LastEditors: Please set LastEditors
 */
const adminUserModel = require('../../model/adminModel/userModel.js');

module.exports = async (ctx) => {
    try{
        const res = await adminUserModel.update_article(ctx.request.body)
        console.log(res)
        ctx.body = {
            status: 200,
            success: '成功',
            message: '更新文章成功',
            data: {}
        }
    }catch(err) {
        console.log(err)
        ctx.body = {
            status: 500,
            success: '失败',
            message: 'error code 500',
            data: err
        }
    }
}