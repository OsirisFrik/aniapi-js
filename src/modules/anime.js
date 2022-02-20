const Client = require('../libs/client')

module.exports = class Anime extends Client {
  getById(id, v = 1) {
    return this.client({
      url: `/v${v}/anime/${id}`,
      method: 'get'
    })
  }

  random(count = 1, nsfw = false, v = 1) {
    return this.client({
      url: `/v${v}/random/anime/${count}/${nsfw}`,
      method: 'get'
    })
  }
  
  search(query, pagination = {}, v = 1) {
    return this.client({
      url: `/v${v}/anime/`,
      method: 'get',
      params: {
        ...query,
        ...pagination
      }
    })
  }
}
