/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-10 01:06:46
 * @LastEditTime: 2019-05-21 00:24:37
 */

const koa = require('koa');
const bodyParser  = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa-cors');
const router = require('./router/index.js');

const app = new koa();

app
    .use(logger())
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
;

app.listen(8000, () => {
    console.log('Node started successfully');
});