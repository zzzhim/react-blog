/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-21 00:35:45
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    base_url: '/api',
    db: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        multipleStatements: true // 必须加上这句话,不然的话就无法执行多条sql语句
    },
    dbName: 'my_blog',
    secret: 'wang'
};