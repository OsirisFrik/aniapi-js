const Client = require('../libs/client')

module.exports = class User extends Client {
  getById(id, v = 1) {
    return this.client({
      url: `/v${v}/user/${id}`,
      method: 'get'
    })
  }

  search(query = {}, pagination = {}, v = 1) {
    return this.client({
      url: `/v${v}/user`,
      method: 'get',
      params: {
        ...query,
        ...pagination
      }
    })
  }

  updateUser(data, v = 1) {
    return this.client({
      url: `/v${v}/user`,
      method: 'post',
      data
    })
  }

  async deleteUser(id, v = 1) {
    await this.client({
      url: `/v${v}/user/${id}`,
      method: 'delete'
    })
  }

  /**
   * User Story
   */

  getStoryById(id, v = 1) {
    return this.client({
      url: `/v${v}/user_story/${id}`,
      method: 'get'
    })
  }

  searchStory(query, v = 1) {
    return this.client({
      url: `/v${v}/user_story`,
      method: 'get',
      params: query
    })
  }

  createStory(data, v = 1) {
    return this.client({
      url: `/v${v}/user_story`,
      method: 'put',
      data
    })
  }

  updateStory(data, v = 1) {
    return this.client({
      url: `/v${v}/user_story`,
      method: 'post',
      data
    })
  }

  async deleteStory(id, v = 1) {
    await this.client({
      url: `/v${v}/user_story/${id}`,
      method: 'delete'
    })
  }
}
