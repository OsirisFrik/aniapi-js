import { Client, Pagination, PaginationResponse } from '../libs/client'
import { AnimeFormat, AnimeSeasonPeriod, AnimeStatus, AnimeWeeklyAiringDay } from '../libs/enums'

export interface AnimeQuerySearch {
  title?: string
  anilist_id?: string | number
  mal_id?: string | number
  tmdb_id?: string | number
  formats?: string[]
  status?: string[] | number[]
  year?: string | number
  season?: string[]
  genres?: string[]
  nsfw?: boolean
  with_episodes?: boolean
}

interface AnimeData {
  id: string
  anilist_id: number | null
  mal_id: number | null
  tmd_id: number | null
  format: AnimeFormat
  status: AnimeStatus
  titles: {
    en: string
    jp: string
    it: string
    [key: string]: string
  }
  description: {
    en: string
    it: string
    [key: string]: string
  }
  start_date: string | null
  end_date: string | null
  weekly_airing_day: AnimeWeeklyAiringDay
  season_period: AnimeSeasonPeriod
  season_year: number | null
  episodes_count: number | null
  episode_duration: number | null
  trailer_url: number | null
  cover_image: string
  cover_color: string | null
  banner_image: string | null
  generes: string[]
  score: number
  sagas: {
    titles: {
      en: string
      jp: string
      it: string
      fr: string
      [key: string]: string
    }
    descriptions?: {}
    episode_from?: number
    episode_to?: number
    episode_count?: number
  }[]
  nsfw?: boolean
  hasCoverImage?: boolean
  sequel: number | null
  prequel: number | null
}

export declare class Anime extends Client {
  getById(id: String, version?: number): Promise<AnimeData>
  random(count?: number, nsfw?: boolean, version?: number): Promise<AnimeData[]>
  search(query: AnimeQuerySearch, pagination?: Pagination, version?: number): Promise<PaginationResponse<AnimeData>>
}
