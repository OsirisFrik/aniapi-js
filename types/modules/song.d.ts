import { Client, Pagination, PaginationResponse } from '../libs/client'
import { AnimeSeasonPeriod, AnimeSongType } from '../libs/enums'

export interface SongData {
  id: number
  anime_id: number
  title: string
  artist: string
  album: string
  year: string
  season: AnimeSeasonPeriod
  duration: number
  preview_url: string
  open_spotify_url?: string
  local_spotify_url: string
  type: AnimeSongType
}

export interface SongQuery {
  anime_id?: string
  title?: string
  artist?: string
  year?: string
  season?: AnimeSeasonPeriod
  type?: AnimeSongType
}

export declare class Song extends Client {
  getById(id: number | string, version?: number): Promise<SongData>
  search(search: SongQuery, pagination?: Pagination, version?: number): Promise<PaginationResponse<SongData>>
  random(count?: number, version?: number): Promise<SongData[]>
}
