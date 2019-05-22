const adminUserModel = require('../../model/adminModel/userModel.js');

module.exports = async (ctx) => {
    try{
        const articleList = await adminUserModel.getArticleList(ctx.request.query)
        ctx.body = {
            status: 200,
            success: '成功',
            data: articleList
        }
    }catch(err) {
        ctx.body = {
            status: 500,
            success: '失败',
            data: 'error code 500'
        }
    }
}