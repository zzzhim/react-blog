const fs = require('fs')


class PublicController {
    uploadImage(ctx) {
        const files = ctx.request.files

        const path = __dirname + '\\static'

        try {
            fs.readdirSync(path, (err, files)=>{
                console.log(err)
            })
        }catch(error) {
             //创建
             fs.mkdirSync(path, (err)=>{
                console.log(err);
            })
        }

        if(files instanceof Array){
            for(let file of files){
                let reader = fs.createReadStream(file.path);
                let filename = file.name;
                let newPath = path + "\\" + filename;
                let writer = fs.createWriteStream(newPath);
                reader.pipe(writer);
                ctx.body = {
                    a: 200
                };
            }
        }else{
            //单个文件的情况
            //console.log(files);
            let reader = fs.createReadStream(files.path);
            let filename = file.name;
            let newPath = __dirname + '\\uploads\\' + filename;
            let writer = fs.createWriteStream(newPath);
            reader.pipe(writer);
            let data = {
                message:'文件上传成功',
                imgSrc:filename
            }
            ctx.body = data;//直接传递一个对象给前端浏览器
        }
    }
}

module.exports = new PublicController()