'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let focus = await this.ctx.model.Focus.find(); 
    let beauty = await this.ctx.model.Picture.find({'classify_id':'1'});
    let back = await this.ctx.model.Picture.find({'classify_id':'2'});

    await this.ctx.render("/default/index",{
      focus,
      back,
      beauty,
    })
  }
}

module.exports = HomeController;
