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
                    const result = await client.putStream(nanoid()+ Date.now() + fileName, stream);
                    resolve(result);
                } catch (e) {
                    reject(e);
                };
            })();
        })

    }

    async uploadImage(ctx) {
        const files = ctx.request.files;

        if(files instanceof Array){
            for(let file of files){
                let reader = fs.createReadStream(file.path);
                let fileName = file.name;
                await PublicController.upload(fileName, reader)
                    .then(res => {
                        // ctx.body = {
                        //     static: 200,
                        //     data: {
                        //         url: res.url
                        //     }
                        // };
                        ctx.body = {
                            "location": res.url
                        };
                    })
                    .catch(err => {
                        console.log(err)
                        ctx.body = {
                            static: 500
                        };
                    })
            };
        }else{
            //单个文件的情况
            let reader = fs.createReadStream(files.path);
            let fileName = file.name;
            PublicController.upload(fileName, reader)
                .then(res => {
                    ctx.body = {
                        "location": res.url
                    };
                })
                .catch(err => {
                    console.log(err)
                    ctx.body = {
                        static: 500
                    };
                })
        };
    }
}

module.exports = new PublicController()