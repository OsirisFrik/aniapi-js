import { Anime } from './modules/anime'
import { Episode } from './modules/episode'
import { Resouce } from './modules/resource'
import { Song } from './modules/song'
import { User } from './modules/user'

declare class AniAPI {
  constructor(token: string)

  anime: Anime
  episode: Episode
  song: Song
  resource: Resouce
  user: User
}

export default AniAPI
export * from './modules/anime'
export * from './modules/episode'
export * from './modules/resource'
export * from './modules/song'
export * from './modules/user'
export { Pagination, PaginationResponse } from './libs/client'
export * from './libs/enums'
