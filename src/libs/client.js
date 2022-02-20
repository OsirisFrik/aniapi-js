const { create } = require('axios').default

module.exports = class Client {
  constructor(token) {
    this.client = create({
      baseURL: 'https://api.aniapi.com',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    this.client.interceptors.response.use((response) => {
      if (response.status === 200 && response.data.status_code === 200) {
        return response.data.data
      }

      throw response.data
    })
  }
}
