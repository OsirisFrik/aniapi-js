const Client = require('../libs/client')

module.exports = class Resource extends Client {
  resources(v = 1) {
    return this.client({
      url: `/v${v}/resources`,
      method: 'get'
    })
  }

  generes(version = '1.0', v = 1) {
    return this.client({
      url: `/v${v}/resources/${version}/0`,
      method: 'get'
    })
  }

  locations(version = '1.0', v = 1) {
    return this.client({
      url: `/v${v}/resources/${version}/1`,
      method: 'get'
    })
  }
}
