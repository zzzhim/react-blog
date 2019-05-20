const adminModel = require('../../model/adminModel/index.js');
const crypto = require('crypto');

class ClinetController {
    async home(ctx) {
        ctx.body = '我是';
    }
};

module.exports = new ClinetController();