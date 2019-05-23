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
        ctx.body = {
            status: 500,
            success: '失败',
            message: 'error code 500',
            data: 'error code 500'
        }
    }
}