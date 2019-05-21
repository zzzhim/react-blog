/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-20 23:51:23
 * @LastEditors: your name
 */
const Router = require('koa-router');
const { base_url } = require('../config/index');
const AdminController = require('../controller/adminController/index');
const PublicController = require('../controller/publicController/index');

const router = new Router({
    prefix: base_url
});

router
    .post('/admin/uploadImage', PublicController.uploadImage)
;

router
    .post('/admin/login', AdminController.login)
    .post('/admin/release', AdminController.release)
;

module.exports = router;