/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 23:51:23
 * @LastEditTime: 2019-05-22 01:32:23
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
    secret: 'wang',
    access_key: '9GKuGYgZq-nEUymyv4jJo5rXjDGKN7j9fyCdhf0b',
    secret_key: 'GdxR0vA0jCm7O9G9BpBr-zpW_3XbrkGJo6nWZ_g-'
};