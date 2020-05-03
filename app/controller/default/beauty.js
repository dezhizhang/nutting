'use strict';

const Controller = require('egg').Controller;

class BeautyController extends Controller {
  async index() {
    let { picture_id } = this.ctx.query;
    if(picture_id) {
      let list = await this.ctx.model.Picture.find({'picture_id':picture_id,'classify_id':'1'});
      await this.ctx.render('/default/beauty',{
        list
      })
    } else {
      let list = await this.ctx.model.Picture.find({'classify_id':'1'});
      await this.ctx.render('/default/beauty',{
        list
      })
    }
  }
}

module.exports = BeautyController;
