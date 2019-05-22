/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-22 20:56:09
 * @LastEditors: Please set LastEditors
 */
const jwt = require('jsonwebtoken');
const { secret } = require('../config/');

module.exports = async (ctx, next) => {
    const json = ctx.get('X-Token');
    const XToken = JSON.parse(json).token;

    try {
        await jwt.verify(XToken, secret); //如果token过期或验证失败，将抛出错误
        await next();
    } catch (err) {
        console.log(err.message)
        if (err.message == 'jwt expired') {
            ctx.body = {
                code: 401,
                message: 'token已过期,请重新登录'
            };
        }else if(err.message == 'jwt must be provided') {
            ctx.body = {
                code: 403,
                message: '必须携带token'
            };
        }else {
            // ctx.throw(500) //直接抛出500的错误,在所有加上checkToken的代码里面.
            //抛给了前端的response拦截器了....
            ctx.body = {
                code: 500,
                message: 'error code 500'
            };
        };
    };
};