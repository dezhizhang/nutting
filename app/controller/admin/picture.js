'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class PictureController extends BaseController {
    async index() {
        let list = await this.ctx.model.Picture.find();
        await this.ctx.render('/admin/picture/index',{
            list
        });
    }
    async add() {
        let list = await this.ctx.model.Classify.find();
        await this.ctx.render('/admin/picture/add',{
            list
        });
    }
    async doAdd() {
        let parts = this.ctx.multipart({ autoFields: true });
        let files = {};               
        let stream;
        while ((stream = await parts()) != null) {
            if (!stream.filename) {          
                break;
            }       
            let fieldname = stream.fieldname;  //file表单的名字
            //上传图片的目录
            let dir=await this.service.tools.getUploadFile(stream.filename);
            let target = dir.uploadDir;
            let writeStream = fs.createWriteStream(target);
            await pump(stream, writeStream);  
            files=Object.assign(files,{
                [fieldname]:dir.saveDir    
            })
            
        }   
        // const data = await this.ctx.service.utils.uploadFiles();
        // console.log(data);


        let picture =new this.ctx.model.Picture(Object.assign(files,parts.field));
        await picture.save();
        await this.success('/admin/picture','增加图片成功');
    }
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteInfo(id,'Picture');
    }
}

module.exports = PictureController;
