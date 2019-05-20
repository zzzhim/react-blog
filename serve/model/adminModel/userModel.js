// 引入封装的查询语句
const query = require('../../utils/query');

class UserModel {
    async getUserByName(user) {
        return await query(`SELECT * FROM user WHERE username='${user}'`)
    }
};

module.exports = new UserModel();