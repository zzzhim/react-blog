/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-26 01:42:10
 * @LastEditTime: 2019-05-26 01:54:06
 * @LastEditors: Please set LastEditors
 */
const articleModel = require('../../model/clinetModel/articleModel.js');

module.exports = async (ctx) => {
    try{
        const articleList = await articleModel.getArticleList(ctx.request.query)
        const articleTotal = await articleModel.getArticleTotal()
        ctx.body = {
            status: 200,
            success: '成功',
            data: {
                list: articleList,
                total: articleTotal.length
            }
        }
    }catch(err) {
        ctx.body = {
            status: 500,
            success: '失败',
            message: 'error code 500',
            data: err
        }
    }
}