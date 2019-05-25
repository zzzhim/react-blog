/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-26 02:14:33
 * @LastEditors: Please set LastEditors
 */
// 引入封装的查询语句
const query = require('../../utils/query');

class UserModel {
    async getUserByName(user) {
        return await query(`SELECT * FROM user WHERE username='${user}'`)
    }

    async insertArticle(article) {
        const { title, content, tags, Introduction } = article
        return await query(`INSERT INTO ARTICLE SET title='${title}', tags='${tags}', introduction='${Introduction}', content='${content}', read_nums=0, is_show=0`)
    }

    async getArticleList({ current, pageSize }) {
        // return await query(`SELECT * FROM ARTICLE ORDER BY id DESC LIMIT ${current * pageSize - pageSize},${current * pageSize}`)
        return await query(`SELECT * FROM ARTICLE ORDER BY id DESC LIMIT ${current * pageSize - pageSize},${pageSize}`)
    }

    async getArticleTotal() {
        return await query(`SELECT id FROM ARTICLE`)
    }

    async is_show(id, is_show) {
        return await query(`UPDATE ARTICLE SET is_show='${is_show}' WHERE id=${id}`)
    }

    async update_article({ id, title, tags, Introduction, content }) {
        return await query(`UPDATE ARTICLE SET title='${title}', tags='${tags}', introduction='${Introduction}', content='${content}' WHERE id=${id}`)
    }
};

module.exports = new UserModel();