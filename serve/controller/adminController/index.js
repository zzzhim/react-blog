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
        // const secret = 'wangyafei1007';
        const { username, password } = ctx.request.body;
        const regularPassword = /^[A-Za-z0-9]{4,40}$/;
        const data = { sussecc: '成功', status: 200 };

        if(regularPassword.test(password)) {
            // 查询用户是否存在
            const res = await adminUserModel.getUserByName(username);

            if(res.length !== 0) {
                const pass = res[0].password;
                // 密码正确
                if(pass === AdminController.encryption(password)) {
                    const token = createToken(username);

                    ctx.body = Object.assign(data, {
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
};

module.exports = new AdminController();