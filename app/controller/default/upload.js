'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async index() {
      await this.ctx.render("/default/upload")
  }
}

module.exports = UploadController;
