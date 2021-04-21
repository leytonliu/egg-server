'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const user = await ctx.service.user.find();
    ctx.body = { user, total: user.length };
  }

  async insert() {
    const { ctx } = this;
    const log = {
      user_id: 1,
      timestamp: new Date(),
    };
    const result = await ctx.service.user.insert(log);
    ctx.body = result;
  }

  async read() {
    const { ctx } = this;
    const { id } = ctx.query;
    const user = await ctx.service.user.findById(id);
    ctx.body = { user };
  }
}

module.exports = HomeController;
