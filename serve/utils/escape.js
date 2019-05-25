/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-26 02:05:57
 * @LastEditTime: 2019-05-26 02:08:47
 * @LastEditors: Please set LastEditors
 */
const mysql = require('mysql');

module.exports = function escape(template, ...subs) {
    let result = '';
    for (let i = 0; i < subs.length; i++) {
        result += template[i];
        result += mysql.escape(subs[i]);
    };
    result += template[template.length - 1];
    return result;
};