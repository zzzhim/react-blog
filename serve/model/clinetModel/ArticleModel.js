/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-26 02:33:39
 * @LastEditors: Please set LastEditors
 */
// 引入封装的查询语句
const query = require('../../utils/query');

class UserModel {
    async getArticleList({ current, pageSize }) {
        return await query(`SELECT * FROM ARTICLE WHERE is_show='1' ORDER BY id DESC LIMIT ${current * pageSize - pageSize},${pageSize}`);
    }

    async getArticleTotal() {
        return await query(`SELECT id FROM ARTICLE WHERE is_show='1'`);
    }
};

module.exports = new UserModel();