'use strict';
const fs=require('fs');
const pump = require('mz-modules/pump');
const BaseController = require('./base');

class UserController extends BaseController {
  async index() {
    let list = await this.ctx.model.User.find();
    await this.ctx.render('/admin/user/index',{
        list
    });
  }
  async add() {
      await this.ctx.render('/admin/user/add');
      
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

        let result = await this.ctx.model.User.find({'email':parts.field.email});
        if(result.length > 0) {
            await this.error('/admin/user/add','当前用户以存在');
            return
        }

        parts.field.password = await this.service.tools.md5(parts.field.password);
        let user =new this.ctx.model.User(Object.assign(files,parts.field));
        await user.save();
        await this.success('/admin/user','增加用户成功')
    }
    //删除文件
    async delete() {
        let { id } = this.ctx.query;
        await this.deleteInfo(id,"User");
    }

}

module.exports = UserController;
