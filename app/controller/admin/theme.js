'use strict';
const BaseController = require('./base');
class ThemeController extends BaseController {
  async index() {
    let list = await this.ctx.model.Theme.find();
    await this.ctx.render('/admin/theme/index',{
      list
    });
  }
  async add() {
    await this.ctx.render('/admin/theme/add')
  }
  async doAdd() {
    let result = this.ctx.request.body;
    let classify = new this.ctx.model.Theme(result);
    await classify.save();
    await this.success('/admin/theme','增加主题成功');
  }
  async delete() {
    let { id } = this.ctx.query;
    await this.deleteInfo(id,'Theme');
  }
}

module.exports = ThemeController;
