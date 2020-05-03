'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
    async index() {
        let { id } = this.ctx.query;
        let list = await this.ctx.model.Picture.find({"_id":id});
        console.log(list);

        if(list.length > 0) {
            await this.ctx.render('/default/detail',{
                list:list[0]
            });
        }
        
    }
}

module.exports = DetailController;
