const Client = require('../libs/client')

module.exports = class Episode extends Client {
  getById(id, v = 1) {
    return this.client({
      url: `/v${v}/episode/${id}`,
      method: 'get'
    })
  }

  search(query, pagination = {}, v = 1) {
    return this.client({
      url: `/v${v}/episode`,
      method: 'get',
      params: {
        ...query,
        ...pagination
      }
    })
  }
}
