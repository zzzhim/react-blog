const mysql = require('mysql');
const { db, dbName } = require('../config/index.js');
const fs = require('fs');
const path = require('path');
let pool = null;

// 封装一个query方法,方便我们进行sql语句的执行
function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                    connection.release();
                });
            };
        });
    });
};

// 需要创建一个数据库,并且能够将sql文件夹下的sql文件执行
const sqlContent = fs.readFileSync(path.resolve(__dirname, '..', './sql/my_blog.sql'), 'utf-8');
// 第一次连接数据库的时候,没有指定数据库名称,这次连接的目的是为了能够创建一个my_blog的数据库
// 并且将数据库文件执行,执行完毕后my_blog数据库就有对应的表和数据了
const init = mysql.createConnection(db);

init.connect();

init.query(`CREATE DATABASE ${dbName}`, err => {
    Object.assign(db, { database: dbName});
    pool = mysql.createPool(db);

    if (err) {
        console.log("数据库已存在");
    } else {
        query(sqlContent).then(res => {
            console.log('数据库创建成功');
        }).catch(err => {
            console.log(err);
        });
    };
});
init.end();

module.exports = query;