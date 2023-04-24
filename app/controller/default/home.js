/*
 * :file description: 
 * :name: /nutting/app/controller/default/home.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-03-21 08:57:35
 * :last editor: 张德志
 * :date last edited: 2023-04-25 00:34:11
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let focus = await this.ctx.model.Focus.find(); 
    let beauty = await this.ctx.model.Picture.find();
    let back = await this.ctx.model.Picture.find();

    // await this.ctx.render("/default/index")
    await this.ctx.render("/default/index",{
      focus,
      back,
      beauty,
    })
  }
}

module.exports = HomeController;
