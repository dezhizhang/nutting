'use strict';

const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class ManagerController extends BaseController {
    async index() {
        let userInfo = this.ctx.session.userInfo;
        let list = await this.ctx.model.Admin.find();
        await this.ctx.render('/admin/manager/index',{
            list,
            userInfo
        })
    }
    async add() {
        await this.ctx.render('/admin/manager/add');
    }
    //增加管理员
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

        let result = await this.ctx.model.Admin.find({'email':parts.field.email});
        if(result.length > 0) {
            await this.error('/admin/manager/add','当前管理员以存')
            return
        }

        parts.field.password = await this.service.tools.md5(parts.field.password);
        let admin =new this.ctx.model.Admin(Object.assign(files,parts.field));
        await admin.save();
        await this.success('/admin/manager','增加管理员成功');
    }
    //删除方法
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteInfo(id,'Admin');
    }
}

module.exports = ManagerController;
