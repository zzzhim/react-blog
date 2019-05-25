/*
 Navicat Premium Data Transfer

 Source Server         : blog
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : my_blog

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 26/05/2019 02:28:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章标题',
  `tags` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章标签',
  `introduction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章简介',
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章内容',
  `read_nums` int(255) NULL DEFAULT NULL COMMENT '阅读次数',
  `is_show` tinyint(1) UNSIGNED ZEROFILL NOT NULL COMMENT '是否发布',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, '123', '213', '213', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p><img src=\"http://react-blog.oss-cn-hangzhou.aliyuncs.com/EWu3_TzsMpTCL4mdiK56Y1558504765074cp1.png\" alt=\"\" width=\"210\" height=\"171\" /></p>\n</body>\n</html>', 0, 0, '2019-05-22 14:30:48', '2019-05-22 14:31:05');
INSERT INTO `article` VALUES (5, '1232', '213', '21323', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p><img src=\"http://react-blog.oss-cn-hangzhou.aliyuncs.com/EWu3_TzsMpTCL4mdiK56Y1558504765074cp1.png\" alt=\"\" width=\"210\" height=\"171\" /></p>\n</body>\n</html>', 0, 0, '2019-05-22 14:31:09', '2019-05-22 14:35:53');
INSERT INTO `article` VALUES (7, '123', '123', '123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123</p>\n</body>\n</html>', 0, 0, '2019-05-22 15:01:29', '2019-05-22 15:01:29');
INSERT INTO `article` VALUES (8, '213', '123', '123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123</p>\n</body>\n</html>', 0, 0, '2019-05-22 15:03:39', '2019-05-26 01:46:28');
INSERT INTO `article` VALUES (9, '123', '213', '123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123</p>\n</body>\n</html>', 0, 0, '2019-05-22 15:18:38', '2019-05-22 15:18:38');
INSERT INTO `article` VALUES (10, '213', '213', '213', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123</p>\n</body>\n</html>', 0, 0, '2019-05-22 15:19:03', '2019-05-26 01:46:30');
INSERT INTO `article` VALUES (11, '21312', '21321', '213213', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p><img src=\"http://react-blog.oss-cn-hangzhou.aliyuncs.com/WXDGJBfL1knzXrpi-6cKe1558510173996cp2.png\" alt=\"\" width=\"490\" height=\"311\" /></p>\n</body>\n</html>', 0, 0, '2019-05-22 15:29:38', '2019-05-26 01:46:32');
INSERT INTO `article` VALUES (12, '123', '123', '12312', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>13</p>\n</body>\n</html>', 0, 0, '2019-05-22 16:41:58', '2019-05-26 01:46:34');
INSERT INTO `article` VALUES (13, '1231', '3213', '123123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123213</p>\n</body>\n</html>', 0, 1, '2019-05-22 16:42:05', '2019-05-22 23:58:13');
INSERT INTO `article` VALUES (14, '123', '12321', '123123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123</p>\n</body>\n</html>', 0, 1, '2019-05-22 16:42:10', '2019-05-22 23:58:11');
INSERT INTO `article` VALUES (15, '12321', '3213', '312321', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>213213</p>\n</body>\n</html>', 0, 0, '2019-05-22 16:42:14', '2019-05-23 00:00:39');
INSERT INTO `article` VALUES (16, '12312', '123213', '123123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123123</p>\n</body>\n</html>', 0, 1, '2019-05-22 16:42:21', '2019-05-23 01:04:59');
INSERT INTO `article` VALUES (17, '123啊', 'js', '123', '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>123</p>\n</body>\n</html>', 0, 0, '2019-05-23 18:53:08', '2019-05-26 02:27:53');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名称',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `create_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '90b0029ed16ab79e202adf01837832525a2815cce3df134a6ef5c7fbb488f1fc', '2019-05-11 10:07:57', '2019-05-11 10:09:50');

SET FOREIGN_KEY_CHECKS = 1;
