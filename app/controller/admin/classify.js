'use strict';
const BaseController = require('./base');
class ClassifyController extends BaseController {
  async index() {
    let list = await this.ctx.model.Classify.find();
    await this.ctx.render('/admin/classify/index',{
      list
    });
  }
  async add() {
    await this.ctx.render('/admin/classify/add')
  }
  async doAdd() {
    let result = this.ctx.request.body;
    let classify = new this.ctx.model.Classify(result);
    await classify.save();
    await this.success('/admin/classify','增加分类成功');
  }
  async delete() {
    let { id } = this.ctx.query;
    await this.deleteInfo(id,'Classify');
  }
}

module.exports = ClassifyController;
