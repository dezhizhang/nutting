'use strict';

const Controller = require('egg').Controller;

class DetailController extends Controller {
    //详情
    async index() {
        let { id } = this.ctx.query;
        await this.ctx.render('/admin/detail/index',{
            detail_id:id
        })
    }
    //增加
    async add() {
        let { detail_id } = this.ctx.query;
        await this.ctx.render('/admin/detail/add',{
            detail_id
        })
    }

}

module.exports = DetailController;
