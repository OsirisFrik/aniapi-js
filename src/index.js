const Client = require('./libs/client')
const Anime = require('./modules/anime')
const Episode = require('./modules/episode')
const Song = require('./modules/song')
const Resource = require('./modules/resource')
const User = require('./modules/user')

module.exports = class AniAPI extends Client {
  constructor(token) {
    super(token)

    this.anime = new Anime
    this.episode = new Episode
    this.song = new Song
    this.resource = new Resource
    this.user = new User
  }
}
