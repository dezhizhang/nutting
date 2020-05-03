'use strict';

const Controller = require('egg').Controller;

class ActivityController extends Controller {
  async index() {
    await this.ctx.render('/default/index');
  }
}

module.exports = ActivityController;
