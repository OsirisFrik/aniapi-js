const Client = require('../libs/client')

module.exports = class Song extends Client {
  getById(id, v = 1) {
    return this.client({
      url: `/v${v}/song/${id}`,
      method: 'get'
    })
  }

  search(query, pagination = {}, v = 1) {
    return this.client({
      url: `/v${v}/song`,
      method: 'get',
      params: {
        ...query,
        ...pagination
      }
    })
  }

  random(count = 1, v = 1) {
    return this.client({
      url: `/v${v}/random/song/${count}`,
      method: 'get'
    })
  }
}
