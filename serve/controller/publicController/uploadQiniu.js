/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-22 01:34:01
 * @LastEditTime: 2019-05-22 01:35:21
 * @LastEditors: Please set LastEditors
 */
const qiniu = require('node-qiniu');
const { access_key, secret_key } = require('../../config');

qiniu.config({
    access_key,
    secret_key
});
