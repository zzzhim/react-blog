/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-22 00:17:02
 * @LastEditTime: 2019-05-22 01:34:38
 * @LastEditors: Please set LastEditors
 */
const fs = require('fs');
const OSS = require('ali-oss');
const nanoid = require('nanoid')
const { access_key, secret_key, bucket, region } = require('../../config/oss.config.js')

class PublicController {

    static upload(fileName, stream) {
        return new Promise((resolve, reject) => {
            return (async () => {
                const client = new OSS({
                    region: region,
                    accessKeyId: access_key,
                    accessKeySecret: secret_key,
                    bucket: bucket
                });

                try {
                    console.log('上传图片开始')
                    const result = await client.putStream(nanoid()+ Date.now() + fileName, stream);
                    console.log('上传图片结束')
                    resolve(result);
                } catch (e) {
                    reject(e);
                };
            })();
        });
    }

    async uploadImage(ctx) {
        try {
            const files = ctx.request.files.file;
            let reader = fs.createReadStream(files.path);
            let fileName = files.name;
            await PublicController.upload(fileName, reader)
                .then(res => {
                    ctx.body = {
                        status: 200,
                        success: '成功',
                        message: '图片上传成功',
                        data: res
                    };
                })
                .catch(err => {
                    ctx.body = {
                        status: 500,
                        success: '失败',
                        message: '图片上传失败',
                        data: err
                    };
                })
        }catch(err) {
            ctx.body = {
                status: 500,
                success: '失败',
                message: 'error code 500',
                data: err
            };
        }
    }

    static media(fileName, stream) {
        return new Promise((resolve, reject) => {
            return (async () => {
                const client = new OSS({
                    region: region,
                    accessKeyId: access_key,
                    accessKeySecret: secret_key,
                    bucket: bucket
                });

                try {
                    const name = 'media/' + nanoid()+ Date.now() + fileName;
                    console.log('上传文件开始')
                    const result = await client.multipartUpload(name, stream, {
                        progress: async function (p) {
                            console.log('Progress: ' + p);
                        }
                    });
                    let head = await client.head(name);
                    console.log('上传文件结束')
                    resolve(head);
                } catch (e) {
                    reject(e);
                };
            })();
        });
    }

    async uploadMedia(ctx) {
        try {
            const files = ctx.request.files.file;
            await PublicController.media(files.name, files.path)
                .then(res => {
                    ctx.body = {
                        status: 200,
                        success: '成功',
                        message: '文件上传成功',
                        data: res.res.requestUrls
                    };
                })
                .catch(err => {
                    ctx.body = {
                        status: 500,
                        success: '失败',
                        message: '文件上传失败',
                        data: err
                    };
                })
        }catch(err) {
            ctx.body = {
                status: 500,
                success: '失败',
                message: 'error code 500',
                data: err
            };
        }
    }
}

module.exports = new PublicController()