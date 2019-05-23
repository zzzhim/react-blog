/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-22 23:25:41
 * @LastEditors: Please set LastEditors
 */
const Router = require('koa-router');
const { base_url } = require('../config/index');
const AdminController = require('../controller/adminController/index');
const get_article_list = require('../controller/adminController/get_article_list.js');
const update_article = require('../controller/adminController/update_article.js');
const PublicController = require('../controller/publicController/index');
const checkToken = require('../utils/checkToken');

const router = new Router({
    prefix: base_url
});

router
    .get('/admin/get_article_list', checkToken, get_article_list)
;

router
    .post('/admin/upload_image', checkToken, PublicController.uploadImage)
    .post('/admin/upload_media', checkToken, PublicController.uploadMedia)
;

router
    .post('/admin/login', AdminController.login)
    .post('/admin/release', checkToken, AdminController.release)
    .post('/admin/update_article', checkToken, update_article)
    .post('/admin/is_show', checkToken, AdminController.is_show)
;

module.exports = router;