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