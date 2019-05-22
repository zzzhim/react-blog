const adminUserModel = require('../../model/adminModel/userModel.js');

module.exports = async (ctx) => {
    try{
        const articleList = await adminUserModel.getArticleList(ctx.request.query)
        const articleTotal = await adminUserModel.getArticleTotal()
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
            data: 'error code 500'
        }
    }
}