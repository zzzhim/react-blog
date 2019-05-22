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
};

module.exports = new UserModel();