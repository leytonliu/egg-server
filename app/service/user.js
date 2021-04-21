// eslint-disable-next-line strict
const { Service } = require('egg');

class UserService extends Service {
  async find() {
    const count = await this.app.mysql.count('access_log');
    const user = await this.app.mysql.select('access_log', {
      columns: [ 'id', 'timestamp' ], // 要查询的表字段
      orders: [[ 'id', 'asc' ]], // 排序方式
      limit: 3, // 返回数据量
    });
    return { user, count };
  }

  async insert(log) {
    const result = await this.app.mysql.insert('access_log', log);
    return result;
  }

  async findById(id) {
    const user = await this.app.mysql.get('access_log', { id });
    return user;
  }
}

module.exports = UserService;
