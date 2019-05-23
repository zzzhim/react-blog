/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-23 18:52:45
 * @LastEditors: Please set LastEditors
 */
const adminUserModel = require('../../model/adminModel/userModel.js');
const createToken = require('../../utils/createToken');
// 加密
const crypto = require('crypto');

class AdminController {
    static encryption(str) {
        const hash = crypto.createHmac('sha256', str)
                        .update('my blog')
                        .digest('hex');
        return hash;
    }

    async login(ctx) {
        // 账户 admin
        // 密码 wangyafei1007
        const { username, password } = ctx.request.body;
        const regularPassword = /^[A-Za-z0-9]{4,40}$/;
        const data = { sussecc: '成功', status: 401 };
        if(regularPassword.test(password)) {
            // 查询用户是否存在
            const res = await adminUserModel.getUserByName(username);

            if(res.length !== 0) {
                const pass = res[0].password;
                // 密码正确
                if(pass === AdminController.encryption(password)) {
                    const token = createToken(username);

                    ctx.body = Object.assign(data, {
                        status: 200,
                        data: {
                            username,
                            token
                        }
                    });
                }else {
                    ctx.body = Object.assign(data, {
                        data: '密码不正确'
                    });
                };
            }else {
                ctx.body = Object.assign(data, { data: '用户不存在' });
            };
        }else {
            ctx.body = Object.assign(data, { data: '密码格式不正确' });
        };
    }

    async release(ctx) {
        const { title, tags, Introduction, content } = ctx.request.body;

        if(title && tags && Introduction && content) {
            try {
                await adminUserModel.insertArticle({
                    title,
                    tags,
                    Introduction,
                    content
                });
                ctx.body = {
                    status: 200,
                    sussecc: '成功',
                    data: '文章发布成功'
                };
            }catch(err) {
                ctx.body = {
                    status: 500,
                    sussecc: '失败',
                    data: 'error code 500'
                };
            }
        }else {
            ctx.body = {
                status: 401,
                sussecc: '失败',
                data: '验证不通过'
            };
        };
    }

    async is_show(ctx) {
        const { id, is_show } = ctx.request.body;

        try {
            await adminUserModel.is_show(id, is_show === 0 ? 1 : 0);
            ctx.body = {
                status: 200,
                message: is_show === 0 ? '文章已发布' : '文章已取消发布',
                data: {
                    id,
                    is_show: is_show === 0 ? 1 : 0
                }
            };
        }catch(err) {
            ctx.body = {
                status: 500,
                sussecc: '失败',
                message: 'error code 500',
                data: 'error code 500'
            };
        }
    }
};

module.exports = new AdminController();