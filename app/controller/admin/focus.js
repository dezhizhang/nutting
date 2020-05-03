'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class PictureController extends BaseController {
    async index() {
        let list = await this.ctx.model.Focus.find();
        await this.ctx.render('/admin/focus/index',{
            list
        });
    }
    async add() {
        let list = await this.ctx.model.Classify.find();
        await this.ctx.render('/admin/focus/add',{
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

        let picture =new this.ctx.model.Focus(Object.assign(files,parts.field));
        await picture.save();
        await this.success('/admin/focus','增加轮播图成功');
    }
    //删除
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteInfo(id,'Focus');
    }
}

module.exports = PictureController;
