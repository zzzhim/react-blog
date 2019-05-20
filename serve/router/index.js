const Router = require('koa-router');
const { base_url } = require('../config/index');
const AdminController = require('../controller/adminController/index');

const router = new Router({
    prefix: base_url
});

router
    .post('/login', AdminController.login)
;

module.exports = router;