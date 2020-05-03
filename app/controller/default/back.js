'use strict';

const Controller = require('egg').Controller;

class BackController extends Controller {
  async index() {
    let { picture_id } = this.ctx.query;
    if(picture_id) {
      let list = await this.ctx.model.Picture.find({'picture_id':picture_id,'classify_id':'2'});
      await this.ctx.render('/default/back',{
        list
      });
    } else {
      let list = await this.ctx.model.Picture.find({'classify_id':'2'});
      await this.ctx.render('/default/back',{
        list
      })
    }
  }
}

module.exports = BackController;
